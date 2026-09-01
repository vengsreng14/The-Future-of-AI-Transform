import { createFileRoute, Link } from "@tanstack/react-router";
import { predictions2050, scenarios2050 } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/2050")({ component: FarPage });

function FarPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
        After 2030 · Horizon 2050
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl">
        Twenty-five years is long enough for the 2030 bet to have paid — or failed
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        2030 is still an extrapolation of 2026. 2050 is a different kind of
        claim: either superintelligence has already arrived, or the lab-CEO
        timeline was wrong and we live with very strong tools instead. Older
        expert surveys put a 50% chance of human-level machine intelligence
        around 2040–2050, then a hop to superintelligence in years to decades.
        Treat every card as a scenario, not a schedule.
      </p>
      <p className="mt-3 text-sm text-muted">
        Read 2030 first if you skipped it —{" "}
        <Link to="/horizon" className="text-fg underline underline-offset-4">
          the near horizon
        </Link>
        .
      </p>

      <div className="mt-10 grid gap-3 lg:grid-cols-3">
        {scenarios2050.map((s) => (
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

      <h2 className="mt-16 font-display text-3xl">Predictions for 2050</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Good and bad, labeled. Confidence is how much 2026 evidence supports
        the direction — not a probability of the exact headline.
      </p>

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {predictions2050.map((p) => (
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
    </main>
  );
}
