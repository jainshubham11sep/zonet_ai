import * as cheerio from 'cheerio';

const USER_AGENT = 'Mozilla/5.0 (compatible; ZonetAuditBot/1.0; +https://zonettech.com/audit)';

const MAX_HTML_BYTES = 2_000_000;

export interface FetchedPage {
  finalUrl: string;
  status: number;
  ok: boolean;
  headers: Headers;
  html: string;
  $: cheerio.CheerioAPI;
}

export async function fetchPage(url: string, timeoutMs = 10_000): Promise<FetchedPage> {
  const res = await fetch(url, {
    headers: {
      'User-Agent': USER_AGENT,
      Accept: 'text/html,application/xhtml+xml',
      'Accept-Language': 'en',
    },
    redirect: 'follow',
    signal: AbortSignal.timeout(timeoutMs),
  });
  const html = (await res.text()).slice(0, MAX_HTML_BYTES);
  return {
    finalUrl: res.url,
    status: res.status,
    ok: res.ok,
    headers: res.headers,
    html,
    $: cheerio.load(html),
  };
}

/** Lightweight existence check — returns HTTP status or null on network failure. */
export async function probeUrl(url: string, timeoutMs = 3_000): Promise<number | null> {
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      headers: { 'User-Agent': USER_AGENT },
      redirect: 'follow',
      signal: AbortSignal.timeout(timeoutMs),
    });
    // Some servers reject HEAD outright — treat method errors as "exists"
    if (res.status === 405 || res.status === 501) return 200;
    return res.status;
  } catch {
    return null;
  }
}

/** Run async tasks with a fixed concurrency limit. */
export async function withConcurrency<T, R>(
  items: T[],
  limit: number,
  task: (item: T) => Promise<R>
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let next = 0;
  async function worker(): Promise<void> {
    while (next < items.length) {
      const index = next++;
      results[index] = await task(items[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}
