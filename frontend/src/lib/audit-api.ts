import {
  MOCK_QUICK_CHECKS,
  MOCK_SECTIONS,
  mockOverallScore,
} from "@/components/pages/audit/audit-mock";
import type {
  AuditState,
  SectionKey,
  SectionResult,
  UnlockResult,
} from "@/components/pages/audit/audit-types";
import { SECTION_KEYS } from "@/components/pages/audit/audit-types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

/** Falls back to mock mode automatically when no backend is configured/reachable. */
let mockMode = !API_URL;

export function isMockMode(): boolean {
  return mockMode;
}

// ---------------------------------------------------------------------------
// Real API client — all responses use the backend SuccessResponse envelope
// ---------------------------------------------------------------------------

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}/api/v1${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || `Request failed (${res.status})`);
  }
  return json.data as T;
}

// ---------------------------------------------------------------------------
// Mock client — sessionStorage-backed, mirrors real API behavior incl. gating
// ---------------------------------------------------------------------------

interface MockStore {
  auditId: string;
  url: string;
  unlocked: boolean;
  email: string | null;
  run: SectionKey[];
}

function mockKey(id: string): string {
  return `zonet-audit:${id}`;
}

function readMock(id: string): MockStore | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(mockKey(id));
  return raw ? (JSON.parse(raw) as MockStore) : null;
}

function writeMock(store: MockStore): void {
  sessionStorage.setItem(mockKey(store.auditId), JSON.stringify(store));
}

function delay(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/** Server-side gating simulation: half the checks visible until unlocked. */
function gateSection(
  key: SectionKey,
  run: boolean,
  unlocked: boolean,
): SectionResult {
  if (!run) {
    return {
      key,
      status: "idle",
      score: null,
      checks: [],
      metrics: [],
      locked: false,
      hiddenCount: 0,
    };
  }
  const full = MOCK_SECTIONS[key];
  if (unlocked) {
    return {
      key,
      status: "complete",
      score: full.score,
      checks: full.checks,
      metrics: full.metrics,
      locked: false,
      hiddenCount: 0,
    };
  }
  const visible = Math.ceil(full.checks.length / 2);
  return {
    key,
    status: "complete",
    score: full.score,
    checks: full.checks.slice(0, visible),
    metrics: full.metrics.slice(0, 1),
    locked: true,
    hiddenCount: full.checks.length - visible,
  };
}

function mockState(store: MockStore): AuditState {
  const sections = Object.fromEntries(
    SECTION_KEYS.map((k) => [
      k,
      gateSection(k, store.run.includes(k), store.unlocked),
    ]),
  ) as Record<SectionKey, SectionResult>;

  const completed = store.run.map((k) => MOCK_SECTIONS[k]);
  const issueCount =
    MOCK_QUICK_CHECKS.filter((c) => c.status !== "pass").length +
    store.run.reduce(
      (n, k) =>
        n + MOCK_SECTIONS[k].checks.filter((c) => c.status !== "pass").length,
      0,
    );

  return {
    auditId: store.auditId,
    url: store.url,
    unlocked: store.unlocked,
    overallScore: mockOverallScore(completed),
    issueCount,
    quick: MOCK_QUICK_CHECKS,
    sections,
  };
}

// ---------------------------------------------------------------------------
// Public API — identical signatures in mock and live mode
// ---------------------------------------------------------------------------

export async function startAudit(url: string): Promise<{ auditId: string }> {
  if (!mockMode) {
    try {
      return await api<{ auditId: string }>("/audit", {
        method: "POST",
        body: JSON.stringify({ url }),
      });
    } catch (err) {
      if (err instanceof TypeError) {
        // Network failure — backend down, fall back to mock so UI stays testable
        mockMode = true;
      } else {
        throw err;
      }
    }
  }
  await delay(900);
  const auditId = `mock-${Date.now().toString(36)}`;
  writeMock({ auditId, url, unlocked: false, email: null, run: [] });
  return { auditId };
}

export async function getAudit(id: string): Promise<AuditState> {
  if (!mockMode && !id.startsWith("mock-")) {
    return api<AuditState>(`/audit/${id}`);
  }
  const store = readMock(id);
  if (!store) throw new Error("Audit not found — start a new audit.");
  return mockState(store);
}

export async function runSection(
  id: string,
  key: SectionKey,
): Promise<AuditState> {
  if (!mockMode && !id.startsWith("mock-")) {
    return api<AuditState>(`/audit/${id}/section/${key}`, { method: "POST" });
  }
  const store = readMock(id);
  if (!store) throw new Error("Audit not found — start a new audit.");
  // Heavy sections (PSI) take longer — simulate that
  await delay(key === "performance" || key === "mobile" ? 3200 : 1700);
  if (!store.run.includes(key)) store.run.push(key);
  writeMock(store);
  return mockState(store);
}

export async function unlockAudit(
  id: string,
  email: string,
  name: string,
): Promise<UnlockResult> {
  if (!mockMode && !id.startsWith("mock-")) {
    return api<UnlockResult>(`/audit/${id}/unlock`, {
      method: "POST",
      body: JSON.stringify({ email, name }),
    });
  }
  const store = readMock(id);
  if (!store) throw new Error("Audit not found — start a new audit.");
  await delay(1100);
  store.email = email;
  writeMock(store);
  return {
    message: `We sent a secure link to ${email}. Open it to unlock your full report.`,
    devVerifyUrl: `/audit/${id}?token=mock-token`,
  };
}

export async function verifyAudit(
  id: string,
  token: string,
): Promise<AuditState> {
  if (!mockMode && !id.startsWith("mock-")) {
    return api<AuditState>(
      `/audit/${id}/verify?token=${encodeURIComponent(token)}`,
    );
  }
  const store = readMock(id);
  if (!store) throw new Error("Audit not found — start a new audit.");
  if (!token.startsWith("mock")) throw new Error("Invalid or expired link.");
  store.unlocked = true;
  writeMock(store);
  return mockState(store);
}
