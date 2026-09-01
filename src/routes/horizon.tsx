import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { fields, predictions2030, scenarios } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/horizon")({ component: HorizonPage });

function HorizonPage() {
  const [open, setOpen] = useState(fields[0]?.id ?? "health");
  const field = fields.find((f) => f.id === open) ?? fields[0];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
        Predictions · 2030
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl">
        Four years of compounding — then the 2050 question
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        OECD and the UK government both refuse a single story. Progress could
        stall, grind, or take off. Lab CEOs lean toward takeoff around 2030.
        Most institutional papers still treat a measured climb as the base
        case. The cards below are concrete 2030 bets, then fields.
      </p>

      <div className="mt-10 grid gap-3 lg:grid-cols-3">
        {scenarios.map((s) => (
          <article key={s.id} className="rounded-xl border border-border bg-surface p-5">
            <p className="font-mono text-[11px] tracking-[0.16em] text-steel uppercase">
              {s.odds}
            </p>
            <h2 className="mt-3 font-display text-2xl">{s.title}</h2>
            <p className="mt-1 text-sm text-muted">{s.kicker}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{s.body}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-16 font-display text-3xl">What we expect by 2030</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Each line is a prediction, not a promise. Stance marks upside, downside,
        or both.
      </p>
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {predictions2030.map((p) => (
          <article key={p.id} className="rounded-xl border border-border bg-surface p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span
                className={cn(
                  "font-mono text-[10px] tracking-[0.16em] uppercase",
                  p.stance === "promise" && "text-promise",
                  p.stance === "risk" && "text-risk",
                  p.stance === "both" && "text-steel",
                )}
              >
                {p.stance === "promise" ? "Upside" : p.stance === "risk" ? "Downside" : "Fork"}
              </span>
              <span className="font-mono text-[10px] tracking-[0.12em] text-subtle uppercase">
                {p.confidence}
              </span>
            </div>
            <h3 className="mt-3 font-display text-xl">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            <p className="mt-4 font-mono text-[10px] leading-relaxed tracking-wide text-subtle">
              Basis · {p.basis}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-border-strong bg-elevated px-5 py-6 sm:px-7">
        <p className="font-mono text-[11px] tracking-[0.16em] text-steel uppercase">
          Next horizon
        </p>
        <h2 className="mt-2 font-display text-2xl">Then 2050</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          If the 2030 takeoff happens, 2050 is a superintelligence problem. If
          it does not, 2050 is still robots, medicine, and a politics of AI
          rents. That brief is separate on purpose.
        </p>
        <Link
          to="/2050"
          className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-fg"
        >
          Open the 2050 predictions <ArrowRight className="size-4" />
        </Link>
      </div>

      <h2 className="mt-16 font-display text-3xl">By field</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Each card is now / promise / risk — not a slogan.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {fields.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => {
              setOpen(f.id);
              document.getElementById(f.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={cn(
              "inline-flex min-h-11 items-center rounded-md border px-4 text-sm transition-colors duration-150",
              open === f.id
                ? "border-accent bg-accent text-accent-fg"
                : "border-border text-muted hover:text-fg",
            )}
          >
            {f.title}
          </button>
        ))}
      </div>

      {field ? (
        <article
          id={field.id}
          className="mt-8 scroll-mt-24 rounded-xl border border-border bg-surface p-6 sm:p-8"
        >
          <p className="font-mono text-[11px] tracking-[0.16em] text-steel uppercase">
            {field.kicker}
          </p>
          <h3 className="mt-2 font-display text-3xl">{field.title}</h3>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <Block label="Now" text={field.now} />
            <Block label="Promise" text={field.promise} tone="promise" />
            <Block label="Risk" text={field.risk} tone="risk" />
          </div>
        </article>
      ) : null}

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {fields
          .filter((f) => f.id !== field?.id)
          .map((f) => (
            <button
              key={f.id}
              type="button"
              id={f.id}
              onClick={() => setOpen(f.id)}
              className="scroll-mt-24 rounded-xl border border-border p-5 text-left hover:bg-elevated"
            >
              <p className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
                {f.kicker}
              </p>
              <h3 className="mt-1 font-display text-xl">{f.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted">{f.now}</p>
            </button>
          ))}
      </div>
    </main>
  );
}

function Block({
  label,
  text,
  tone,
}: {
  label: string;
  text: string;
  tone?: "promise" | "risk";
}) {
  return (
    <div>
      <p
        className={cn(
          "font-mono text-[11px] tracking-[0.16em] uppercase",
          tone === "promise" && "text-promise",
          tone === "risk" && "text-risk",
          !tone && "text-subtle",
        )}
      >
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}
