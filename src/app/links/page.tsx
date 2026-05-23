"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const TOKEN_KEY = "coolify_token";

type CoolifyItem = {
  uuid: string;
  name: string;
  fqdn: string | null;
  status: string;
  kind: "application" | "service";
};

type Raw = Record<string, unknown>;

function unwrapList(payload: unknown): Raw[] {
  if (Array.isArray(payload)) return payload as Raw[];
  if (payload && typeof payload === "object") {
    const obj = payload as Raw;
    for (const key of ["data", "items", "results"]) {
      const v = obj[key];
      if (Array.isArray(v)) return v as Raw[];
    }
  }
  return [];
}

function extractFqdn(raw: Raw): string | null {
  const direct = raw.fqdn;
  if (typeof direct === "string" && direct.trim()) return direct;

  const domains = raw.domains;
  if (typeof domains === "string" && domains.trim()) return domains;
  if (Array.isArray(domains) && domains.length > 0) {
    const joined = domains
      .map((d) => (typeof d === "string" ? d : null))
      .filter(Boolean)
      .join(",");
    if (joined) return joined;
  }

  for (const key of ["applications", "subServices", "containers"]) {
    const nested = raw[key];
    if (Array.isArray(nested)) {
      for (const child of nested) {
        if (child && typeof child === "object") {
          const found = extractFqdn(child as Raw);
          if (found) return found;
        }
      }
    }
  }

  return null;
}

function firstFqdn(fqdn: string | null): string | null {
  if (!fqdn) return null;
  const first = fqdn.split(",")[0]?.trim();
  return first || null;
}

function hostnameFor(url: string): string | null {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

function Favicon({ host }: { host: string }) {
  const sources = [
    `https://${host}/favicon.ico`,
    `https://icons.duckduckgo.com/ip3/${host}.ico`,
    `https://www.google.com/s2/favicons?domain=${host}&sz=64`,
  ];
  const [idx, setIdx] = useState(0);
  if (idx >= sources.length) {
    return <div className="size-8 rounded bg-muted shrink-0" />;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={sources[idx]}
      src={sources[idx]}
      alt=""
      width={32}
      height={32}
      className="rounded shrink-0"
      onError={() => setIdx((i) => i + 1)}
    />
  );
}

function statusDotClass(status: string): string {
  const s = status.toLowerCase();
  if (s.startsWith("running")) return "bg-green-500";
  if (s.startsWith("starting") || s.startsWith("restarting"))
    return "bg-yellow-500";
  if (s.startsWith("exited") || s.startsWith("stopped"))
    return "bg-red-500";
  return "bg-gray-400";
}

export default function LinksPage() {
  const [token, setToken] = useState<string | null>(null);
  const [tokenInput, setTokenInput] = useState("");
  const [items, setItems] = useState<CoolifyItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(TOKEN_KEY);
    if (stored) setToken(stored);
  }, []);

  useEffect(() => {
    if (!token) return;
    let cancelled = false;
    setLoading(true);
    setError(null);

    const headers = { Authorization: `Bearer ${token}` };
    Promise.all([
      fetch("/api/coolify/applications", { headers }),
      fetch("/api/coolify/services", { headers }),
    ])
      .then(async ([appsRes, svcsRes]) => {
        if (cancelled) return;
        if (appsRes.status === 401 || svcsRes.status === 401) {
          setError("Token rejected by Coolify. Renew it and paste again.");
          setItems([]);
          return;
        }
        if (!appsRes.ok || !svcsRes.ok) {
          setError(
            `Coolify responded with ${appsRes.status} / ${svcsRes.status}`
          );
          setItems([]);
          return;
        }
        const apps = unwrapList(await appsRes.json());
        const svcs = unwrapList(await svcsRes.json());
        const merged: CoolifyItem[] = [
          ...apps.map((a) => ({
            uuid: String(a.uuid ?? ""),
            name: String(a.name ?? "unnamed"),
            fqdn: extractFqdn(a),
            status: String(a.status ?? "unknown"),
            kind: "application" as const,
          })),
          ...svcs.map((s) => ({
            uuid: String(s.uuid ?? ""),
            name: String(s.name ?? "unnamed"),
            fqdn: extractFqdn(s),
            status: String(s.status ?? "unknown"),
            kind: "service" as const,
          })),
        ].filter((i) => firstFqdn(i.fqdn));
        merged.sort((a, b) => a.name.localeCompare(b.name));
        setItems(merged);
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : "Failed to fetch");
        setItems([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  function saveToken(e: React.FormEvent) {
    e.preventDefault();
    const t = tokenInput.trim();
    if (!t) return;
    localStorage.setItem(TOKEN_KEY, t);
    setToken(t);
    setTokenInput("");
  }

  function clearToken() {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setItems(null);
    setError(null);
  }

  if (!token) {
    return (
      <div className="max-w-md mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold mb-2">Links</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Paste a Coolify API token with read access. Stored only in your
          browser&apos;s localStorage.
        </p>
        <form onSubmit={saveToken} className="flex gap-2">
          <input
            type="password"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            placeholder="Coolify API token"
            className="flex-1 rounded-md border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            autoFocus
            suppressHydrationWarning
          />
          <Button type="submit">Save</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Links</h1>
        <Button variant="ghost" size="sm" onClick={clearToken}>
          Forget token
        </Button>
      </div>

      {loading && (
        <p className="text-sm text-muted-foreground">Loading…</p>
      )}
      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

      {items && items.length === 0 && !loading && !error && (
        <p className="text-sm text-muted-foreground">
          No services with a public FQDN.
        </p>
      )}

      {items && items.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => {
            const fqdn = firstFqdn(item.fqdn)!;
            const url = fqdn.startsWith("http") ? fqdn : `https://${fqdn}`;
            const host = hostnameFor(url);
            return (
              <li key={`${item.kind}-${item.uuid}`}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border p-4 hover:bg-accent transition-colors"
                >
                  {host ? (
                    <Favicon host={host} />
                  ) : (
                    <div className="size-8 rounded bg-muted shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block size-2 rounded-full shrink-0 ${statusDotClass(
                          item.status
                        )}`}
                        title={item.status}
                      />
                      <span className="font-medium truncate">{item.name}</span>
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {host}
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
