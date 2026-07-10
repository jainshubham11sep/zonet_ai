/**
 * Pre-written business-impact strings (no AI in v1).
 * Keyed by check id — attached to warn/fail checks only.
 */
const IMPACTS: Record<string, string> = {
  // Quick scan
  'meta-desc':
    'Google writes its own snippet for you — you lose control of your first impression in search results.',
  favicon: 'A missing favicon makes your site look unfinished in browser tabs and bookmarks.',

  // Performance
  'perf-mobile':
    'More than half of Indian traffic is mobile — a slow mobile site silently turns those visitors away before they see your offer.',
  'perf-desktop':
    'Desktop visitors researching before a purchase judge your business by how fast the site responds.',
  'img-optim':
    'Every extra second of load time costs roughly 7% of conversions. Oversized images are usually the biggest cause.',
  lazy: 'Loading every image up front delays what visitors actually see first.',
  'render-block':
    'Visitors stare at a blank screen while these files load — most leave within 3 seconds.',
  'unused-code':
    'Dead CSS and JavaScript is downloaded by every visitor and does nothing but slow them down.',
  'speed-index':
    'The longer the page takes to look complete, the more visitors assume it is broken.',
  lcp: 'Your main content takes too long to appear — Google demotes slow pages in search results.',
  inp: 'Slow response to taps and clicks makes the site feel broken on cheaper phones.',

  // SEO
  'title-len':
    'A missing or badly sized title tag weakens your ranking and gets cut off in search results.',
  h1: 'Without a single clear H1, search engines struggle to understand what the page is about.',
  'heading-order':
    'Search engines use heading order to understand your page — skips weaken your ranking signals.',
  'alt-text':
    'Images without alt text are invisible to Google Image search — free traffic you never receive.',
  canonical:
    'Without a canonical tag, duplicate URLs can split your ranking power across copies of the same page.',
  robots: 'A broken or blocking robots.txt can hide your entire site from Google.',
  sitemap:
    'Without a sitemap Google may take weeks to discover new pages — your updates stay invisible.',
  schema:
    'No structured data means no rich results — competitors with stars and FAQs push you down the page.',
  'og-tags':
    'Your link shows no image or title when shared on WhatsApp — shared links get ignored.',
  'twitter-card': 'Links shared on X/Twitter show as plain text instead of a rich preview card.',
  'thin-content': 'Pages with very little text rarely rank — Google sees them as low value.',

  // Mobile & accessibility
  viewport:
    'Without a viewport tag the site renders desktop-sized on phones — visitors must pinch-zoom to read.',
  'tap-targets':
    'Buttons too close together cause mis-taps — frustrated mobile users abandon rather than retry.',
  'font-size': 'Text below 12px is unreadable on phones — visitors leave rather than squint.',
  contrast:
    'Low-contrast text is unreadable in sunlight — where most mobile browsing in India happens.',
  labels:
    'Unlabeled form fields confuse both assistive tech and autofill — fewer completed enquiries.',
  'img-alt': 'Missing alt text hurts both accessibility and your Google Image ranking.',

  // Security & trust
  ssl: 'Browsers show "Not Secure" warnings — visitors leave before reading a word.',
  'ssl-expiring':
    'When the certificate lapses, every visitor sees a full-page security warning instead of your site.',
  'https-redirect':
    'Visitors who type your address without https land on an insecure version — and browsers warn them.',
  hsts: 'Browsers may still try insecure connections — attackers on public Wi-Fi can intercept them.',
  xframe: 'Your site can be embedded invisibly on scam pages that hijack your visitors’ clicks.',
  csp: 'Without a Content Security Policy, one compromised script can take over the whole page.',
  'content-type':
    'Browsers may misinterpret files without this header, opening the door to injection attacks.',
  mixed:
    'Insecure resources on a secure page trigger browser warnings and can be tampered with in transit.',
  privacy: 'No visible privacy policy erodes trust and violates ad-platform requirements.',
  'broken-links': 'Dead links tell both Google and customers that the site is unmaintained.',

  // Conversion & lead-gen
  whatsapp:
    'Indian customers strongly prefer WhatsApp — without a chat link you lose the easiest enquiry channel.',
  tel: 'Mobile visitors must copy-paste your number to call — most won’t bother.',
  'cta-fold':
    'Visitors decide in 5 seconds — with no visible action button, that decision is to leave.',
  form: 'With no contact form, after-hours visitors have no way to reach you — they contact a competitor instead.',
  social: 'No social links means no easy way to verify you are a real, active business.',
  maps: 'No address or map makes local customers doubt you exist — and you miss "near me" searches.',
  proof:
    '92% of buyers read reviews first — no social proof means no reason to trust you over competitors.',
  ga4: 'You have no idea where visitors come from or where they leave — every marketing rupee is spent blind.',
  pixel:
    'Without a pixel you cannot retarget the 97% of visitors who don’t convert on the first visit.',
};

export function impactFor(id: string): string | undefined {
  return IMPACTS[id];
}
