import type { CheckExplainer } from '../../types/audit';

/**
 * "What / how / fix" explainers with OFFICIAL documentation links only —
 * Google Search Central, web.dev, MDN, or OWASP. No third-party blogs,
 * no invented URLs. Keyed by check id (see engine/*.engine.ts for the
 * authoritative list of ids in use).
 */
const EXPLAINERS: Record<string, CheckExplainer> = {
  // Quick scan
  reachable: {
    what: 'Confirms the URL responds with a successful HTTP status when requested.',
    how: 'A GET request is sent to the URL; the HTTP status code is checked (200 = reachable).',
    fix: 'Ensure your hosting/DNS is configured correctly and the server is running.',
    docs: [
      {
        label: 'MDN — HTTP response status codes',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status',
      },
    ],
  },
  https: {
    what: 'Checks whether the page is served securely over HTTPS rather than plain HTTP.',
    how: "The final resolved URL (after redirects) is checked for the 'https://' scheme.",
    fix: 'Install an SSL/TLS certificate and redirect all HTTP traffic to HTTPS.',
    docs: [
      { label: 'MDN — HTTPS', url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTTPS' },
      { label: 'web.dev — Why HTTPS matters', url: 'https://web.dev/articles/why-https-matters' },
    ],
  },
  title: {
    what: 'Confirms a <title> tag exists in the page <head>.',
    how: 'Parses the HTML and checks for a non-empty <title> element.',
    fix: 'Add a unique, descriptive <title> tag to every page.',
    docs: [
      {
        label: 'Google Search Central — Title links',
        url: 'https://developers.google.com/search/docs/appearance/title-link',
      },
    ],
  },
  favicon: {
    what: 'Checks for a favicon link tag so browsers show an icon for your site.',
    how: 'Looks for a <link rel="icon"> (or variant) tag in the <head>.',
    fix: 'Add a favicon file and reference it with a <link rel="icon"> tag.',
    docs: [
      {
        label: 'MDN — Adding custom icons to your site',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Favicon',
      },
    ],
  },

  // Performance (PSI-backed)
  'perf-mobile': {
    what: "Google's Lighthouse performance score for the mobile version of your page.",
    how: 'PageSpeed Insights runs a simulated mobile load and scores Core Web Vitals and related metrics from 0–100.',
    fix: 'Improve the metrics below (LCP, TBT, CLS) — the score is a weighted average of them.',
    docs: [
      {
        label: 'web.dev — Performance scoring',
        url: 'https://developer.chrome.com/docs/lighthouse/performance/performance-scoring',
      },
    ],
  },
  'perf-desktop': {
    what: "Google's Lighthouse performance score for the desktop version of your page.",
    how: 'PageSpeed Insights runs a simulated desktop load and scores Core Web Vitals and related metrics from 0–100.',
    fix: 'Improve the metrics below (LCP, TBT, CLS) — the score is a weighted average of them.',
    docs: [
      {
        label: 'web.dev — Performance scoring',
        url: 'https://developer.chrome.com/docs/lighthouse/performance/performance-scoring',
      },
    ],
  },
  'img-optim': {
    what: 'Checks whether images are compressed, modern-format, and appropriately sized.',
    how: "Lighthouse's uses-optimized-images, modern-image-formats, and uses-responsive-images audits.",
    fix: 'Compress images, serve WebP/AVIF, and size images to their display dimensions.',
    docs: [
      {
        label: 'web.dev — Efficiently encode images',
        url: 'https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images',
      },
      {
        label: 'web.dev — Serve images in next-gen formats',
        url: 'https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images',
      },
    ],
  },
  lazy: {
    what: 'Checks whether images outside the initial viewport are deferred (lazy-loaded).',
    how: "Lighthouse's offscreen-images audit.",
    fix: 'Add loading="lazy" to below-the-fold <img> tags, or use a lazy-load library.',
    docs: [
      {
        label: 'web.dev — Defer offscreen images',
        url: 'https://developer.chrome.com/docs/lighthouse/performance/offscreen-images',
      },
    ],
  },
  'render-block': {
    what: 'Checks for CSS/JS resources that block the browser from rendering the page.',
    how: "Lighthouse's render-blocking-resources audit.",
    fix: 'Inline critical CSS, defer non-critical JS/CSS, and use async/defer script attributes.',
    docs: [
      {
        label: 'web.dev — Eliminate render-blocking resources',
        url: 'https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources',
      },
    ],
  },
  'unused-code': {
    what: 'Checks how much downloaded CSS/JS is never actually used on the page.',
    how: "Lighthouse's unused-css-rules and unused-javascript audits.",
    fix: 'Remove dead code, split bundles, and load only what a page needs.',
    docs: [
      {
        label: 'web.dev — Reduce unused JavaScript',
        url: 'https://developer.chrome.com/docs/lighthouse/performance/unused-javascript',
      },
    ],
  },
  'speed-index': {
    what: 'Measures how quickly page content is visually displayed during load.',
    how: "Lighthouse's Speed Index metric, calculated from a filmstrip of the page loading.",
    fix: 'Reduce render-blocking resources and optimize how above-the-fold content loads.',
    docs: [
      {
        label: 'web.dev — Speed Index',
        url: 'https://developer.chrome.com/docs/lighthouse/performance/speed-index',
      },
    ],
  },
  lcp: {
    what: 'Largest Contentful Paint — time until the largest visible element renders.',
    how: 'Measured by Lighthouse/Chrome as part of the Core Web Vitals.',
    fix: 'Optimize server response time, render-blocking resources, and image/font loading for the largest element.',
    docs: [
      { label: 'web.dev — Largest Contentful Paint (LCP)', url: 'https://web.dev/articles/lcp' },
    ],
  },
  cls: {
    what: 'Cumulative Layout Shift — measures unexpected layout movement during load.',
    how: 'Chrome tracks layout shifts and sums their impact scores.',
    fix: 'Set explicit width/height on images and embeds; avoid inserting content above existing content.',
    docs: [
      { label: 'web.dev — Cumulative Layout Shift (CLS)', url: 'https://web.dev/articles/cls' },
    ],
  },
  inp: {
    what: 'Interaction to Next Paint — how quickly the page responds to user interactions.',
    how: 'Chrome measures the latency of clicks, taps, and key presses throughout the page visit.',
    fix: 'Break up long JavaScript tasks and reduce main-thread work during interactions.',
    docs: [
      { label: 'web.dev — Interaction to Next Paint (INP)', url: 'https://web.dev/articles/inp' },
    ],
  },

  // SEO
  'title-len': {
    what: 'Checks your <title> tag is present and an effective length for search results.',
    how: 'Character count of the <title> element; 30–60 characters avoids truncation in search results.',
    fix: 'Write a unique, descriptive title between 30 and 60 characters.',
    docs: [
      {
        label: 'Google Search Central — Title links',
        url: 'https://developers.google.com/search/docs/appearance/title-link',
      },
    ],
  },
  'meta-desc': {
    what: 'Checks for a meta description and whether it is an effective length.',
    how: 'Reads the <meta name="description"> content attribute; 120–160 characters is the target range.',
    fix: 'Write a compelling, unique meta description between 120 and 160 characters per page.',
    docs: [
      {
        label: 'Google Search Central — Meta descriptions',
        url: 'https://developers.google.com/search/docs/appearance/snippet',
      },
    ],
  },
  h1: {
    what: 'Checks the page has exactly one top-level H1 heading.',
    how: 'Counts <h1> elements in the document.',
    fix: 'Use a single, descriptive <h1> per page that summarizes its main topic.',
    docs: [
      {
        label: 'MDN — Heading elements',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements',
      },
    ],
  },
  'heading-order': {
    what: 'Checks that heading levels (H1→H6) increase without skipping a level.',
    how: 'Compares the sequence of heading tag levels found in document order.',
    fix: "Don't skip heading levels — e.g. follow an H2 with an H3, not directly an H4.",
    docs: [
      {
        label: 'W3C WAI — Headings',
        url: 'https://www.w3.org/WAI/tutorials/page-structure/headings/',
      },
    ],
  },
  'alt-text': {
    what: 'Checks what percentage of images have descriptive alt text.',
    how: 'Counts <img> elements with a non-empty alt attribute versus the total.',
    fix: 'Add descriptive alt text to every meaningful image; use alt="" for purely decorative images.',
    docs: [
      {
        label: 'web.dev — Image alt attributes',
        url: 'https://developer.chrome.com/docs/lighthouse/accessibility/image-alt',
      },
      {
        label: 'W3C WAI — Alt text decision tree',
        url: 'https://www.w3.org/WAI/tutorials/images/decision-tree/',
      },
    ],
  },
  canonical: {
    what: 'Checks for a canonical link tag that tells search engines the preferred URL for this page.',
    how: 'Looks for <link rel="canonical"> in the document <head>.',
    fix: 'Add a self-referencing (or correctly pointed) canonical tag to every indexable page.',
    docs: [
      {
        label: 'Google Search Central — Canonicalization',
        url: 'https://developers.google.com/search/docs/crawling-indexing/canonicalization',
      },
    ],
  },
  robots: {
    what: 'Checks whether a robots.txt file exists at the site root.',
    how: 'Requests /robots.txt and checks for a successful response.',
    fix: 'Add a robots.txt file at your domain root to guide search engine crawling.',
    docs: [
      {
        label: 'Google Search Central — robots.txt',
        url: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro',
      },
    ],
  },
  sitemap: {
    what: 'Checks whether a sitemap.xml file exists at the site root.',
    how: 'Requests /sitemap.xml and checks for a successful response.',
    fix: 'Generate an XML sitemap listing your indexable pages and submit it in Search Console.',
    docs: [
      {
        label: 'Google Search Central — Sitemaps',
        url: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview',
      },
    ],
  },
  schema: {
    what: 'Checks for structured data (JSON-LD) that helps search engines understand your content.',
    how: 'Looks for <script type="application/ld+json"> blocks in the page.',
    fix: 'Add relevant Schema.org structured data (Organization, Product, FAQ, etc.) as JSON-LD.',
    docs: [
      {
        label: 'Google Search Central — Structured data',
        url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data',
      },
    ],
  },
  'og-tags': {
    what: 'Checks for Open Graph tags that control how your link looks when shared (e.g. on WhatsApp/Facebook).',
    how: 'Looks for og:title and og:image meta tags in the <head>.',
    fix: 'Add og:title, og:description, and og:image meta tags to every page.',
    docs: [{ label: 'The Open Graph protocol', url: 'https://ogp.me/' }],
  },
  'twitter-card': {
    what: 'Checks for Twitter/X Card meta tags that control link previews on that platform.',
    how: 'Looks for meta tags with a name starting in "twitter:".',
    fix: 'Add twitter:card, twitter:title, and twitter:image meta tags.',
    docs: [
      {
        label: 'X Developer Platform — Cards markup',
        url: 'https://developer.x.com/en/docs/x-for-websites/cards/overview/markup',
      },
    ],
  },
  'thin-content': {
    what: 'Checks whether the page has enough text content to be considered substantive by search engines.',
    how: 'Counts words in the rendered <body> text; under 300 words is flagged.',
    fix: 'Expand thin pages with genuinely useful, unique content relevant to the page topic.',
    docs: [
      {
        label: 'Google Search Central — Helpful, reliable content',
        url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
      },
    ],
  },

  // Mobile & accessibility (PSI-backed)
  viewport: {
    what: 'Checks for a viewport meta tag so mobile browsers render the page at the correct scale.',
    how: 'Lighthouse\'s viewport audit checks for a <meta name="viewport"> tag with appropriate content.',
    fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1">.',
    docs: [
      {
        label: 'web.dev — Has a viewport meta tag',
        url: 'https://developer.chrome.com/docs/lighthouse/pwa/viewport',
      },
    ],
  },
  'tap-targets': {
    what: 'Checks that clickable elements are large enough and spaced apart for touch use.',
    how: "Lighthouse's tap-targets audit measures element size and spacing.",
    fix: 'Make buttons/links at least 48x48px with enough spacing between them.',
    docs: [
      {
        label: 'web.dev — Tap targets are not sized appropriately',
        url: 'https://developer.chrome.com/docs/lighthouse/seo/tap-targets',
      },
    ],
  },
  'font-size': {
    what: 'Checks that body text is large enough to read on mobile without zooming.',
    how: "Lighthouse's font-size audit checks computed font sizes across the page.",
    fix: 'Use a base font size of at least 16px for body text.',
    docs: [
      {
        label: 'web.dev — Document uses legible font sizes',
        url: 'https://developer.chrome.com/docs/lighthouse/seo/font-size',
      },
    ],
  },
  contrast: {
    what: 'Checks that text has sufficient color contrast against its background.',
    how: "Lighthouse's color-contrast audit measures contrast ratios against WCAG thresholds.",
    fix: 'Increase contrast between text and background colors to meet WCAG AA (4.5:1 for normal text).',
    docs: [
      {
        label: 'web.dev — Colors have sufficient contrast',
        url: 'https://developer.chrome.com/docs/lighthouse/accessibility/color-contrast',
      },
      {
        label: 'WCAG 2 — Contrast (Minimum)',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html',
      },
    ],
  },
  labels: {
    what: 'Checks that form fields have associated, accessible labels.',
    how: "Lighthouse's label audit checks each form input for a linked <label> or aria-label.",
    fix: 'Add a <label for="..."> (or aria-label) to every form input.',
    docs: [
      {
        label: 'web.dev — Form elements have associated labels',
        url: 'https://developer.chrome.com/docs/lighthouse/accessibility/label',
      },
    ],
  },
  'img-alt': {
    what: 'Checks that images have alternative text for screen readers (accessibility category).',
    how: "Lighthouse's image-alt audit checks every <img> for an alt attribute.",
    fix: 'Add descriptive alt text to every meaningful image.',
    docs: [
      {
        label: 'web.dev — Image elements have alt attributes',
        url: 'https://developer.chrome.com/docs/lighthouse/accessibility/image-alt',
      },
    ],
  },

  // Security & trust
  ssl: {
    what: "Checks that the site's SSL/TLS certificate is valid.",
    how: 'A direct TLS connection is made to the server and the certificate chain/expiry are checked.',
    fix: 'Install a valid SSL certificate (e.g. via Let’s Encrypt) and keep it renewed.',
    docs: [
      { label: "Let's Encrypt — Getting started", url: 'https://letsencrypt.org/getting-started/' },
    ],
  },
  'ssl-expiring': {
    what: 'Your SSL certificate is valid but close to expiry.',
    how: 'The certificate’s "valid to" date is compared against the current date.',
    fix: 'Renew the certificate before it expires — automate renewal if possible.',
    docs: [
      {
        label: "Let's Encrypt — Renewal",
        url: 'https://letsencrypt.org/docs/faq/#will-let-s-encrypt-remind-me-about-certificate-expiration',
      },
    ],
  },
  'https-redirect': {
    what: 'Checks that requests to the HTTP version of your site redirect to HTTPS.',
    how: 'An HTTP request is made and the response is checked for a 3xx redirect to an https:// URL.',
    fix: 'Configure your server to redirect all HTTP traffic to HTTPS (301 redirect).',
    docs: [
      {
        label: 'web.dev — Redirects HTTP traffic to HTTPS',
        url: 'https://developer.chrome.com/docs/lighthouse/pwa/redirects-http',
      },
    ],
  },
  hsts: {
    what: 'Checks for the Strict-Transport-Security header, which forces browsers to use HTTPS.',
    how: 'Checks the HTTP response headers for strict-transport-security.',
    fix: 'Add a Strict-Transport-Security header with an appropriate max-age.',
    docs: [
      {
        label: 'MDN — Strict-Transport-Security',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security',
      },
    ],
  },
  xframe: {
    what: 'Checks for the X-Frame-Options header, which prevents clickjacking via iframes.',
    how: 'Checks the HTTP response headers for x-frame-options.',
    fix: 'Add an X-Frame-Options header (e.g. SAMEORIGIN), or use CSP frame-ancestors.',
    docs: [
      {
        label: 'MDN — X-Frame-Options',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options',
      },
    ],
  },
  csp: {
    what: 'Checks for a Content-Security-Policy header that restricts what resources can load.',
    how: 'Checks the HTTP response headers for content-security-policy.',
    fix: 'Define a Content-Security-Policy header scoped to the resources your site actually needs.',
    docs: [
      {
        label: 'MDN — Content-Security-Policy',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy',
      },
      {
        label: 'OWASP — Content Security Policy Cheat Sheet',
        url: 'https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html',
      },
    ],
  },
  'content-type': {
    what: 'Checks for the X-Content-Type-Options header, which stops browsers from MIME-sniffing.',
    how: 'Checks the HTTP response headers for x-content-type-options: nosniff.',
    fix: 'Add X-Content-Type-Options: nosniff to your server responses.',
    docs: [
      {
        label: 'MDN — X-Content-Type-Options',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options',
      },
    ],
  },
  mixed: {
    what: 'Checks for insecure (http://) resources loaded on an otherwise secure (https://) page.',
    how: 'Scans image, script, link, and iframe tags for http:// sources on an HTTPS page.',
    fix: 'Change all resource URLs to https:// or protocol-relative.',
    docs: [
      {
        label: 'MDN — Mixed content',
        url: 'https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content',
      },
    ],
  },
  privacy: {
    what: 'Checks whether a privacy policy or terms page is linked from the site.',
    how: 'Scans link text and hrefs for "privacy" or "terms" patterns.',
    fix: 'Add a visible link to a Privacy Policy (and Terms) page, typically in the footer.',
    docs: [
      {
        label: 'Google Business Profile Help — Privacy policy requirements',
        url: 'https://support.google.com/googleplay/android-developer/answer/9859455',
      },
    ],
  },
  'broken-links': {
    what: 'Checks a sample of on-page links for broken (4xx/5xx or unreachable) destinations.',
    how: 'Up to 20 unique links are probed with HEAD requests (5 at a time, 3s timeout each).',
    fix: 'Fix or remove links pointing to missing or erroring pages.',
    docs: [
      {
        label: 'Google Search Central — Fix crawling errors',
        url: 'https://developers.google.com/search/docs/crawling-indexing/http-network-errors',
      },
    ],
  },

  // Conversion & lead-gen
  whatsapp: {
    what: 'Checks for a WhatsApp click-to-chat link (wa.me or api.whatsapp.com).',
    how: 'Scans all page links for WhatsApp chat URL patterns.',
    fix: 'Add a WhatsApp click-to-chat link or button using the wa.me format.',
    docs: [
      {
        label: 'WhatsApp Business — Click to Chat',
        url: 'https://faq.whatsapp.com/425247423114725',
      },
    ],
  },
  tel: {
    what: 'Checks for a clickable phone number using the tel: link scheme.',
    how: 'Scans all page links for an href starting with "tel:".',
    fix: 'Wrap your phone number in a <a href="tel:+91...">.',
    docs: [
      {
        label: 'MDN — tel: URL scheme',
        url: 'https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/tel',
      },
    ],
  },
  'cta-fold': {
    what: 'Checks whether a clear call-to-action is present near the top of the page.',
    how: 'Scans header/nav and the first portion of the page HTML for common CTA phrasing.',
    fix: 'Place a clear action button (Contact, Get Started, Call Now, etc.) above the fold.',
    docs: [
      {
        label: 'web.dev — Content Structure & UX (learn hub)',
        url: 'https://web.dev/learn/design',
      },
    ],
  },
  form: {
    what: 'Checks for a contact form that captures visitor details (email/phone/message).',
    how: 'Scans <form> elements for email, tel, or textarea inputs.',
    fix: 'Add a simple contact form with at minimum a name, email/phone, and message field.',
    docs: [
      {
        label: 'MDN — How to structure a web form',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form',
      },
    ],
  },
  social: {
    what: 'Checks for links to your social media profiles.',
    how: 'Scans links against a list of major social platform domains.',
    fix: 'Add links to your active social profiles, typically in the header or footer.',
    docs: [
      {
        label: 'Google Search Central — sameAs structured data',
        url: 'https://developers.google.com/search/docs/appearance/structured-data/organization',
      },
    ],
  },
  maps: {
    what: 'Checks for a Google Maps embed or address that helps local customers find you.',
    how: 'Scans for a Google Maps iframe/link, or an <address> element.',
    fix: 'Embed a Google Map and/or add your address in an <address> tag, typically in the footer.',
    docs: [
      {
        label: 'Google Maps Platform — Embed API',
        url: 'https://developers.google.com/maps/documentation/embed/get-started',
      },
    ],
  },
  proof: {
    what: 'Checks whether the page shows testimonials, reviews, or other social proof.',
    how: 'Scans page text for common social-proof language (testimonial, review, trusted by, etc.).',
    fix: 'Add customer testimonials, review scores, or client logos to build trust.',
    docs: [
      {
        label: 'Google Search Central — Review snippets',
        url: 'https://developers.google.com/search/docs/appearance/structured-data/review-snippet',
      },
    ],
  },
  ga4: {
    what: 'Checks whether Google Analytics is installed on the page.',
    how: 'Scans the page HTML for Google Analytics / gtag.js signatures.',
    fix: 'Install Google Analytics (GA4) via gtag.js or Google Tag Manager.',
    docs: [
      {
        label: 'Google Analytics — Get started',
        url: 'https://support.google.com/analytics/answer/9304153',
      },
    ],
  },
  pixel: {
    what: 'Checks whether the Meta (Facebook) Pixel is installed on the page.',
    how: 'Scans the page HTML for the Meta Pixel base code signature.',
    fix: 'Install the Meta Pixel via Meta Events Manager to enable retargeting and conversion tracking.',
    docs: [
      {
        label: 'Meta Business Help Center — Meta Pixel',
        url: 'https://www.facebook.com/business/help/952192354843755',
      },
    ],
  },
};

export function explainerFor(id: string): CheckExplainer | undefined {
  return EXPLAINERS[id];
}
