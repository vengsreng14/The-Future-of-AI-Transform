import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { people, type Person } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/power")({ component: PowerPage });

const cats: { id: "all" | Person["category"]; label: string }[] = [
  { id: "all", label: "Everyone" },
  { id: "lab", label: "Frontier labs" },
  { id: "platform", label: "Platforms" },
  { id: "chips", label: "Chips" },
  { id: "open", label: "Open weights" },
  { id: "critic", label: "Critics & science" },
];

function PowerPage() {
  const [cat, setCat] = useState<(typeof cats)[number]["id"]>("all");
  const list = useMemo(
    () => (cat === "all" ? people : people.filter((p) => p.category === cat)),
    [cat],
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
        Power
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl">
        A small set of people sit on models, chips, clouds, and feeds
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        Elon Musk is the most visible: Grok, Tesla robots, X, Neuralink, and —
        in 2026 reporting — xAI absorbed into SpaceXAI. Visibility is not the
        same as monopoly. NVIDIA sells the picks and shovels. Microsoft and
        Google own the workplace and the search bar. Anthropic and OpenAI fight
        over enterprise. DeepSeek and Meta leak capability into the open.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCat(c.id)}
            className={cn(
              "inline-flex min-h-11 items-center rounded-md border px-4 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-150",
              cat === c.id
                ? "border-accent bg-accent text-accent-fg"
                : "border-border text-muted hover:text-fg",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-4">
        {list.map((p) => (
          <article
            key={p.id}
            id={p.id}
            className="scroll-mt-24 rounded-xl border border-border bg-surface p-5 sm:p-7"
          >
            <div className="flex flex-wrap items-start gap-4">
              <span className="grid size-12 place-items-center rounded-md bg-elevated font-mono text-sm tracking-widest text-steel">
                {p.initials}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-2xl">{p.name}</h2>
                  <span className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
                    {p.category}
                  </span>
                </div>
                <p className="text-sm text-muted">
                  {p.role} · {p.org}
                </p>
                <p className="mt-3 text-sm font-medium text-steel">{p.lever}</p>
                <p className="mt-3 leading-relaxed text-muted">{p.bio}</p>
                <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
                    Now
                  </span>
                  <span className="mt-1 block">{p.now}</span>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
