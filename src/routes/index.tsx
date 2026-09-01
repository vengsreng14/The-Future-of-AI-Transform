import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Minus } from "lucide-react";
import { events, fields, ISSUE, people, predictions2030, promises, risks, scenarios } from "@/lib/content";
import { PersonCard } from "@/components/person-card";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <p className="font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
            {ISSUE.kicker}
          </p>
          <p className="mt-3 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            Made by {ISSUE.author}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            AI is no longer a demo.
            <span className="block text-muted">
              By 2030 it is infrastructure — for science, work, and power.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {ISSUE.tagline} This briefing uses what is already on the record in
            2026: lab products, government evals, job forecasts, and the people
            who actually run the stack.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/now"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 font-medium text-accent-fg transition-opacity duration-150 hover:opacity-90"
            >
              What is happening now
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/power"
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border-strong px-5 text-fg transition-colors duration-150 hover:bg-elevated"
            >
              Who holds power
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl md:grid-cols-3">
          <Stat
            n="~2030"
            l="Hassabis’s AGI window"
            d="DeepMind’s CEO has said general intelligence could arrive around 2030, plus or minus a year."
          />
          <Stat
            n="$30B"
            l="Anthropic run-rate, 2026"
            d="Reported annualized revenue ahead of OpenAI’s consumer giant — enterprise is where the money is."
          />
          <Stat
            n="5 labs"
            l="U.S. pre-release tests"
            d="CAISI agreements now cover OpenAI, Anthropic, DeepMind, Microsoft, and xAI/SpaceXAI."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Header
          kicker="The record"
          title="Happening now"
          to="/now"
          link="Full timeline"
        />
        <ol className="mt-8 divide-y divide-border border-y border-border">
          {events.slice(0, 4).map((e) => (
            <li key={e.id} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-6">
              <p className="font-mono text-[11px] tracking-[0.14em] text-steel uppercase sm:col-span-3">
                {e.date}
                <span className="mt-1 block text-subtle">{e.tag}</span>
              </p>
              <div className="sm:col-span-9">
                <h3 className="font-display text-xl">{e.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                  {e.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="border-b border-border px-4 py-12 sm:px-6 lg:border-r lg:border-b-0">
            <p className="font-mono text-[11px] tracking-[0.2em] text-promise uppercase">
              The promise
            </p>
            <h2 className="mt-3 font-display text-3xl">What goes right</h2>
            <ul className="mt-8 space-y-6">
              {promises.map((p) => (
                <li key={p.title}>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
                </li>
              ))}
            </ul>
            <Link
              to="/promise"
              className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-fg"
            >
              Read the upside <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="px-4 py-12 sm:px-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-risk uppercase">
              The risk
            </p>
            <h2 className="mt-3 font-display text-3xl">What goes wrong</h2>
            <ul className="mt-8 space-y-6">
              {risks.map((p) => (
                <li key={p.title}>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
                </li>
              ))}
            </ul>
            <Link
              to="/risk"
              className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-fg"
            >
              Read the downside <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Header
          kicker="The stack"
          title="People who hold the levers"
          to="/power"
          link="All twelve"
        />
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Elon Musk is one node — models, robots, a social network, and
          (as of 2026 reporting) SpaceXAI. He is not the only one. Chips,
          clouds, open weights, and public warnings are power too.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {people.slice(0, 6).map((p) => (
            <PersonCard key={p.id} person={p} featured={p.id === "musk"} />
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <Header
            kicker="Through 2030"
            title="Three futures still in play"
            to="/horizon"
            link="2030 predictions"
          />
          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {scenarios.map((s) => (
              <article
                key={s.id}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <p className="font-mono text-[11px] tracking-[0.16em] text-steel uppercase">
                  {s.odds}
                </p>
                <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.kicker}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {predictions2030.slice(0, 4).map((p) => (
              <article key={p.id} className="rounded-xl border border-border bg-surface p-5">
                <p className="font-mono text-[10px] tracking-[0.16em] text-steel uppercase">
                  2030 · {p.confidence}
                </p>
                <h3 className="mt-2 font-display text-xl">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted">{p.body}</p>
              </article>
            ))}
          </div>
          <Link
            to="/horizon"
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-fg"
          >
            All eight 2030 bets <ArrowRight className="size-4" />
          </Link>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {fields.slice(0, 4).map((f) => (
              <Link
                key={f.id}
                to="/horizon"
                hash={f.id}
                className="bg-bg p-5 transition-colors duration-150 hover:bg-elevated"
              >
                <p className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
                  {f.kicker}
                </p>
                <h3 className="mt-2 font-display text-xl">{f.title}</h3>
                <p className="mt-3 line-clamp-4 text-sm text-muted">{f.now}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 rounded-xl border border-border-strong bg-elevated p-6 sm:p-8">
            <p className="font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
              After that · 2050
            </p>
            <h2 className="mt-3 font-display text-3xl">
              Superintelligence, a split planet, or just stronger tools
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              If the 2030 AGI window is real, 2050 is about what comes after
              human-level systems. If it is not, 2050 is still robots in the
              economy, redesigned biology, and a fight over who gets the
              surplus. Both futures are on the record.
            </p>
            <Link
              to="/2050"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 font-medium text-accent-fg"
            >
              2050 predictions
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ n, l, d }: { n: string; l: string; d: string }) {
  return (
    <div className="border-b border-border px-4 py-8 sm:px-6 md:border-b-0 md:border-r md:last:border-r-0">
      <p className="font-display text-3xl tracking-tight">{n}</p>
      <p className="mt-2 font-medium">{l}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
    </div>
  );
}

function Header({
  kicker,
  title,
  to,
  link,
}: {
  kicker: string;
  title: string;
  to: "/now" | "/power" | "/horizon" | "/2050";
  link: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
          <Minus className="size-3" aria-hidden />
          {kicker}
        </p>
        <h2 className="mt-2 font-display text-3xl">{title}</h2>
      </div>
      <Link
        to={to}
        className="inline-flex min-h-11 items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-steel uppercase"
      >
        {link} <ArrowRight className="size-3.5" />
      </Link>
    </div>
  );
}
