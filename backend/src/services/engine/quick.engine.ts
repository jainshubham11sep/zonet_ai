import type { AuditCheck } from '../../types/audit';
import { fetchPage } from './fetch-page';
import { impactFor } from './impact.templates';

/** Instant, cheap checks run when the audit is created. */
export async function runQuickScan(url: string): Promise<AuditCheck[]> {
  let page: Awaited<ReturnType<typeof fetchPage>>;
  try {
    page = await fetchPage(url);
  } catch {
    return [
      {
        id: 'reachable',
        label: 'Website is reachable',
        status: 'fail',
        impact: 'The site did not respond — visitors and Google see nothing at all.',
      },
    ];
  }

  const { $, finalUrl, ok } = page;
  const checks: AuditCheck[] = [];

  checks.push({
    id: 'reachable',
    label: 'Website is reachable',
    status: ok ? 'pass' : 'fail',
    value: `HTTP ${page.status}`,
  });

  checks.push({
    id: 'https',
    label: 'Served over HTTPS',
    status: finalUrl.startsWith('https://') ? 'pass' : 'fail',
    impact: finalUrl.startsWith('https://') ? undefined : impactFor('ssl'),
  });

  const title = $('head title').first().text().trim();
  checks.push({
    id: 'title',
    label: 'Title tag present',
    status: title ? 'pass' : 'fail',
    value: title ? `${title.length} chars` : undefined,
    impact: title ? undefined : impactFor('title-len'),
  });

  const metaDesc = $('head meta[name="description"]').attr('content')?.trim() ?? '';
  checks.push({
    id: 'meta-desc',
    label: 'Meta description',
    status: metaDesc ? 'pass' : 'fail',
    value: metaDesc ? `${metaDesc.length} chars` : undefined,
    impact: metaDesc ? undefined : impactFor('meta-desc'),
  });

  const hasFaviconTag = $('head link[rel*="icon"]').length > 0;
  checks.push({
    id: 'favicon',
    label: 'Favicon present',
    status: hasFaviconTag ? 'pass' : 'warn',
    impact: hasFaviconTag ? undefined : impactFor('favicon'),
  });

  return checks;
}
