import { createFileRoute, Link } from "@tanstack/react-router";
import { fields, promises } from "@/lib/content";

export const Route = createFileRoute("/promise")({ component: PromisePage });

function PromisePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-mono text-[11px] tracking-[0.2em] text-promise uppercase">
        Upside
      </p>
      <h1 className="mt-3 font-display text-4xl">The good future is not marketing</h1>
      <p className="mt-4 leading-relaxed text-muted">
        The case for AI is strongest where it already left the slide: protein
        structure, coding, enterprise software, and early science. UK scenario
        work and Epoch’s 2030 note both treat large positive productivity and
        scientific gains as plausible even without a full AGI event.
      </p>

      <div className="mt-10 space-y-8">
        {promises.map((p) => (
          <article key={p.title} className="rounded-xl border border-border bg-surface p-6">
            <h2 className="font-display text-2xl">{p.title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl">Where the upside lands first</h2>
      <ul className="mt-6 divide-y divide-border border-y border-border">
        {fields.map((f) => (
          <li key={f.id} className="py-5">
            <h3 className="font-medium">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.promise}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted">
        None of this is automatic. The same labs that publish protein-design
        posts also train systems that can be probed on biosecurity. Read the
        other half:{" "}
        <Link to="/risk" className="text-fg underline underline-offset-4">
          the risk brief
        </Link>
        .
      </p>
    </main>
  );
}
