import tls from 'node:tls';
import type { AuditCheck, AuditMetric, SectionResult } from '../../types/audit';
import { fetchPage, probeUrl, withConcurrency } from './fetch-page';
import { impactFor } from './impact.templates';
import { scoreFromChecks } from './scoring';

// Hard rules: broken links max 20, concurrency 5, timeout 3s
const MAX_LINKS = 20;
const LINK_CONCURRENCY = 5;

interface SslInfo {
  valid: boolean;
  daysToExpiry: number | null;
}

function getSslInfo(hostname: string): Promise<SslInfo> {
  return new Promise((resolve) => {
    const socket = tls.connect(
      { host: hostname, port: 443, servername: hostname, timeout: 5_000 },
      () => {
        const cert = socket.getPeerCertificate();
        socket.end();
        if (!cert || !cert.valid_to) {
          resolve({ valid: false, daysToExpiry: null });
          return;
        }
        const expiry = new Date(cert.valid_to).getTime();
        const days = Math.floor((expiry - Date.now()) / 86_400_000);
        resolve({ valid: socket.authorized && days > 0, daysToExpiry: days });
      }
    );
    socket.on('error', () => resolve({ valid: false, daysToExpiry: null }));
    socket.on('timeout', () => {
      socket.destroy();
      resolve({ valid: false, daysToExpiry: null });
    });
  });
}

async function checksHttpsRedirect(hostname: string): Promise<boolean> {
  try {
    const res = await fetch(`http://${hostname}/`, {
      redirect: 'manual',
      signal: AbortSignal.timeout(5_000),
    });
    const location = res.headers.get('location') ?? '';
    return res.status >= 300 && res.status < 400 && location.startsWith('https://');
  } catch {
    return false;
  }
}

export async function runSecuritySection(url: string): Promise<SectionResult> {
  const page = await fetchPage(url);
  const { $, finalUrl, headers } = page;
  const parsed = new URL(finalUrl);

  const [ssl, redirects] = await Promise.all([
    getSslInfo(parsed.hostname),
    checksHttpsRedirect(parsed.hostname),
  ]);

  const checks: AuditCheck[] = [];
  const add = (id: string, label: string, ok: boolean | 'warn', value?: string) => {
    const status = ok === true ? 'pass' : ok === 'warn' ? 'warn' : 'fail';
    checks.push({
      id,
      label,
      status,
      value,
      impact: status === 'pass' ? undefined : impactFor(id),
    });
  };

  // SSL
  if (ssl.valid && ssl.daysToExpiry !== null && ssl.daysToExpiry <= 14) {
    add('ssl-expiring', 'SSL certificate valid', 'warn', `expires in ${ssl.daysToExpiry} days`);
  } else {
    add(
      'ssl',
      'SSL certificate valid',
      ssl.valid,
      ssl.daysToExpiry !== null ? `expires in ${ssl.daysToExpiry} days` : undefined
    );
  }
  add('https-redirect', 'HTTP redirects to HTTPS', redirects);

  // Security headers
  add('hsts', 'HSTS header', headers.has('strict-transport-security'));
  add('xframe', 'Clickjacking protection (X-Frame-Options)', headers.has('x-frame-options'));
  add('csp', 'Content Security Policy', headers.has('content-security-policy') ? true : 'warn');
  add(
    'content-type',
    'X-Content-Type-Options header',
    headers.has('x-content-type-options') ? true : 'warn'
  );

  // Mixed content
  const mixedCount = $(
    'img[src^="http://"], script[src^="http://"], link[href^="http://"], iframe[src^="http://"]'
  ).length;
  add(
    'mixed',
    'No mixed content',
    mixedCount === 0,
    mixedCount ? `${mixedCount} insecure resources` : undefined
  );

  // Policy pages
  const pageLinks = $('a[href]').toArray();
  const hasPrivacy = pageLinks.some(
    (el) => /privacy|terms/i.test($(el).attr('href') ?? '') || /privacy|terms/i.test($(el).text())
  );
  add('privacy', 'Privacy policy / terms linked', hasPrivacy ? true : 'warn');

  // Broken links — max 20, concurrency 5, timeout 3s
  const candidates = Array.from(
    new Set(
      pageLinks
        .map((el) => $(el).attr('href') ?? '')
        .filter(
          (href) =>
            href && !href.startsWith('#') && !/^(mailto:|tel:|javascript:|whatsapp:)/i.test(href)
        )
        .map((href) => {
          try {
            return new URL(href, finalUrl).href;
          } catch {
            return null;
          }
        })
        .filter((href): href is string => Boolean(href?.startsWith('http')))
    )
  ).slice(0, MAX_LINKS);

  const statuses = await withConcurrency(candidates, LINK_CONCURRENCY, (link) =>
    probeUrl(link, 3_000)
  );
  const broken = statuses.filter((s) => s === null || s >= 400).length;
  add(
    'broken-links',
    'Broken links',
    broken === 0 ? true : broken <= 2 ? 'warn' : false,
    `${broken} of ${candidates.length} checked`
  );

  const headerCount = [
    'strict-transport-security',
    'x-frame-options',
    'content-security-policy',
    'x-content-type-options',
  ].filter((h) => headers.has(h)).length;

  const metrics: AuditMetric[] = [
    {
      id: 'ssl-days',
      label: 'SSL Expires In',
      value: ssl.daysToExpiry !== null ? `${ssl.daysToExpiry} days` : 'unknown',
      score: ssl.daysToExpiry === null ? 0 : Math.min(100, Math.max(0, ssl.daysToExpiry)),
    },
    {
      id: 'headers',
      label: 'Security Headers',
      value: `${headerCount}/4`,
      score: Math.round((headerCount / 4) * 100),
    },
  ];

  return { key: 'security', status: 'complete', score: scoreFromChecks(checks), checks, metrics };
}
