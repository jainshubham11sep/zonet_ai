import type { AuditCheck, AuditMetric, SectionResult } from '../../types/audit';
import { fetchPage } from './fetch-page';
import { impactFor } from './impact.templates';
import { scoreFromChecks } from './scoring';

const CTA_PATTERN =
  /(get started|contact|book|call now|enquire|enquiry|quote|buy|order|sign ?up|subscribe|start|schedule|talk to|whatsapp|demo)/i;

const SOCIAL_HOSTS = [
  'facebook.com',
  'instagram.com',
  'linkedin.com',
  'twitter.com',
  'x.com',
  'youtube.com',
];

export async function runConversionSection(url: string): Promise<SectionResult> {
  const page = await fetchPage(url);
  const { $, html } = page;

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

  const hrefs = $('a[href]')
    .toArray()
    .map((el) => ($(el).attr('href') ?? '').toLowerCase());

  // WhatsApp
  const hasWhatsApp = hrefs.some(
    (h) => h.includes('wa.me') || h.includes('api.whatsapp.com') || h.startsWith('whatsapp:')
  );
  add('whatsapp', 'WhatsApp click-to-chat', hasWhatsApp);

  // Clickable phone
  add(
    'tel',
    'Clickable phone number',
    hrefs.some((h) => h.startsWith('tel:'))
  );

  // CTA above the fold — heuristic: CTA-looking button/link in the first third of the HTML
  const foldHtml = html.slice(0, Math.floor(html.length / 3));
  const foldText = $('header, nav, main').first().text() + foldHtml;
  const ctaAboveFold =
    $('header a, header button, nav a')
      .toArray()
      .some((el) => CTA_PATTERN.test($(el).text())) || CTA_PATTERN.test(foldText.slice(0, 4000));
  add('cta-fold', 'CTA above the fold', ctaAboveFold ? true : 'warn');

  // Contact form
  const hasForm = $('form')
    .toArray()
    .some((el) => $(el).find('input[type="email"], input[type="tel"], textarea').length > 0);
  add('form', 'Contact form present', hasForm ? true : $('form').length > 0 ? 'warn' : false);

  // Social links
  const socialCount = new Set(
    hrefs.map((h) => SOCIAL_HOSTS.find((s) => h.includes(s))).filter((s): s is string => Boolean(s))
  ).size;
  add(
    'social',
    'Social media links',
    socialCount > 0,
    socialCount ? `${socialCount} found` : undefined
  );

  // Maps / address
  const hasMaps =
    $(
      'iframe[src*="google.com/maps"], a[href*="maps.google"], a[href*="goo.gl/maps"], a[href*="maps.app"]'
    ).length > 0 || $('address').length > 0;
  add('maps', 'Google Maps / address', hasMaps ? true : 'warn');

  // Social proof
  const bodyText = $('body').text();
  const hasProof =
    /testimonial|review|clients? say|rated|trusted by|happy (customers|clients)/i.test(bodyText);
  add('proof', 'Testimonials / social proof', hasProof);

  // Analytics & pixels
  const hasGa =
    /googletagmanager\.com\/gtag|gtag\(|google-analytics\.com|['"](G|UA)-[A-Z0-9-]+['"]/i.test(
      html
    );
  const hasPixel = /connect\.facebook\.net|fbq\(/i.test(html);
  const hasGtm = /googletagmanager\.com\/gtm|GTM-[A-Z0-9]+/i.test(html);
  add('ga4', 'Google Analytics installed', hasGa);
  add('pixel', 'Meta Pixel installed', hasPixel);

  const trackingCount = [hasGa, hasPixel, hasGtm].filter(Boolean).length;

  const metrics: AuditMetric[] = [
    {
      id: 'cta',
      label: 'CTA Visibility',
      value: ctaAboveFold ? 'Above fold' : 'Not found above fold',
      score: ctaAboveFold ? 90 : 30,
    },
    {
      id: 'tracking',
      label: 'Tracking Setup',
      value: `${trackingCount}/3 tools`,
      score: Math.round((trackingCount / 3) * 100),
    },
  ];

  return { key: 'conversion', status: 'complete', score: scoreFromChecks(checks), checks, metrics };
}
