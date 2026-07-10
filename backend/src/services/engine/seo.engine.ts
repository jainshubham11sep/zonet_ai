import type { AuditCheck, AuditMetric, SectionResult } from '../../types/audit';
import { fetchPage, probeUrl } from './fetch-page';
import { impactFor } from './impact.templates';
import { scoreFromChecks } from './scoring';

export async function runSeoSection(url: string): Promise<SectionResult> {
  const page = await fetchPage(url);
  const { $, finalUrl } = page;
  const origin = new URL(finalUrl).origin;

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

  // Title
  const title = $('head title').first().text().trim();
  const titleOk = title.length >= 30 && title.length <= 60;
  add(
    'title-len',
    'Title tag length (30–60 chars)',
    title ? (titleOk ? true : 'warn') : false,
    title ? `${title.length} chars` : 'missing'
  );

  // Meta description
  const metaDesc = $('head meta[name="description"]').attr('content')?.trim() ?? '';
  const descOk = metaDesc.length >= 120 && metaDesc.length <= 160;
  add(
    'meta-desc',
    'Meta description (120–160 chars)',
    metaDesc ? (descOk ? true : 'warn') : false,
    metaDesc ? `${metaDesc.length} chars` : 'missing'
  );

  // H1
  const h1Count = $('h1').length;
  add(
    'h1',
    'Exactly one H1 heading',
    h1Count === 1 ? true : h1Count === 0 ? false : 'warn',
    `${h1Count} found`
  );

  // Heading hierarchy — no level skips
  const levels = $('h1, h2, h3, h4, h5, h6')
    .toArray()
    .map((el) => Number(el.tagName[1]));
  let skip: string | null = null;
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] - levels[i - 1] > 1) {
      skip = `H${levels[i - 1]} → H${levels[i]} skip`;
      break;
    }
  }
  add('heading-order', 'Heading hierarchy correct', skip ? 'warn' : true, skip ?? undefined);

  // Alt coverage
  const imgs = $('img').toArray();
  const withAlt = imgs.filter((el) => Boolean($(el).attr('alt')?.trim())).length;
  const altPct = imgs.length ? Math.round((withAlt / imgs.length) * 100) : 100;
  add(
    'alt-text',
    'Images have alt text',
    altPct >= 90 ? true : altPct >= 60 ? 'warn' : false,
    `${altPct}% coverage`
  );

  // Canonical + favicon
  add('canonical', 'Canonical tag present', $('head link[rel="canonical"]').length > 0);

  // robots.txt + sitemap.xml
  const [robotsStatus, sitemapStatus] = await Promise.all([
    probeUrl(`${origin}/robots.txt`),
    probeUrl(`${origin}/sitemap.xml`),
  ]);
  add('robots', 'robots.txt found', robotsStatus === 200);
  add('sitemap', 'sitemap.xml found', sitemapStatus === 200);

  // Structured data
  add('schema', 'Structured data (JSON-LD)', $('script[type="application/ld+json"]').length > 0);

  // Social share tags
  const ogTitle = $('head meta[property="og:title"]').length > 0;
  const ogImage = $('head meta[property="og:image"]').length > 0;
  add(
    'og-tags',
    'WhatsApp/Facebook share preview',
    ogTitle && ogImage ? true : ogTitle || ogImage ? 'warn' : false
  );
  add(
    'twitter-card',
    'Twitter card tags',
    $('head meta[name^="twitter:"]').length > 0 ? true : 'warn'
  );

  // Content depth
  const wordCount = $('body').text().split(/\s+/).filter(Boolean).length;
  add(
    'thin-content',
    'Enough content on page',
    wordCount >= 300 ? true : 'warn',
    `${wordCount} words`
  );

  const metrics: AuditMetric[] = [
    { id: 'alt-coverage', label: 'Image Alt Coverage', value: `${altPct}%`, score: altPct },
    {
      id: 'word-count',
      label: 'Content Depth',
      value: `${wordCount} words`,
      score: Math.min(100, Math.round((wordCount / 600) * 100)),
    },
  ];

  return { key: 'seo', status: 'complete', score: scoreFromChecks(checks), checks, metrics };
}
