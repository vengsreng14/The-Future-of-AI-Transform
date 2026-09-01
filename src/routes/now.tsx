import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { events, type Stance } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/now")({ component: NowPage });

const filters: { id: Stance | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "promise", label: "Mostly good" },
  { id: "risk", label: "Mostly hard" },
  { id: "both", label: "Double-edged" },
];

function NowPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const list = useMemo(
    () => (filter === "all" ? events : events.filter((e) => e.stance === filter)),
    [filter],
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
        The record · 2025–2026
      </p>
      <h1 className="mt-3 font-display text-4xl">What is actually happening</h1>
      <p className="mt-4 text-muted leading-relaxed">
        Not a prediction deck. These are public facts and reported figures from
        the last 18 months: government testing, lab products, revenue, safety
        scoreboards, and the energy bill behind the chat window.
      </p>

      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "inline-flex min-h-11 items-center rounded-md border px-4 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-150",
              filter === f.id
                ? "border-accent bg-accent text-accent-fg"
                : "border-border text-muted hover:text-fg",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ol className="mt-10">
        {list.map((e, i) => (
          <li key={e.id} className="relative border-l border-border pl-6 pb-10 last:pb-0">
            <span className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-steel" />
            <p className="font-mono text-[11px] tracking-[0.14em] text-steel uppercase">
              {e.date} · {e.tag}
            </p>
            <h2 className="mt-2 font-display text-2xl">{e.title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{e.body}</p>
            <p className="mt-2 font-mono text-[10px] text-subtle">
              {String(i + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
            </p>
          </li>
        ))}
      </ol>
    </main>
  );
}
