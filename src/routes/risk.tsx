import { createFileRoute, Link } from "@tanstack/react-router";
import { fields, risks } from "@/lib/content";

export const Route = createFileRoute("/risk")({ component: RiskPage });

function RiskPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-mono text-[11px] tracking-[0.2em] text-risk uppercase">
        Downside
      </p>
      <h1 className="mt-3 font-display text-4xl">The bad future is already leaking in</h1>
      <p className="mt-4 leading-relaxed text-muted">
        Deepfakes, labor shakeouts, energy draw, and concentrated control are
        not 2030 problems. They are 2026 problems that get worse if capability
        keeps climbing. Geoffrey Hinton’s list — misinformation, weapons, loss
        of control — is the skeleton. The flesh is agents that act, labs that
        score poorly on safety indexes, and a public that did not elect a CEO.
      </p>

      <div className="mt-10 space-y-8">
        {risks.map((p) => (
          <article key={p.title} className="rounded-xl border border-border bg-surface p-6">
            <h2 className="font-display text-2xl">{p.title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl">Field by field</h2>
      <ul className="mt-6 divide-y divide-border border-y border-border">
        {fields.map((f) => (
          <li key={f.id} className="py-5">
            <h3 className="font-medium">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.risk}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted">
        Governance is moving: CAISI pre-deployment tests, safety scoreboards,
        biosecurity evals. It is slower than the models. The other half of the
        ledger is{" "}
        <Link to="/promise" className="text-fg underline underline-offset-4">
          the promise
        </Link>
        .
      </p>
    </main>
  );
}
