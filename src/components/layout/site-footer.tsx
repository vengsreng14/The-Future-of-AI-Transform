import { Link } from "@tanstack/react-router";
import { ISSUE, sources } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl">{ISSUE.name}</p>
          <p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-steel uppercase">
            Made by {ISSUE.author}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            An independent briefing built from public reporting, lab posts, and
            2030 and 2050 scenario work (UK, OECD, Epoch, IEEE, WEF). Not affiliated with
            any lab.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
            Sections
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link to="/now" className="hover:text-fg">
                Happening now
              </Link>
            </li>
            <li>
              <Link to="/promise" className="hover:text-fg">
                The promise
              </Link>
            </li>
            <li>
              <Link to="/risk" className="hover:text-fg">
                The risk
              </Link>
            </li>
            <li>
              <Link to="/power" className="hover:text-fg">
                Who holds the stack
              </Link>
            </li>
            <li>
              <Link to="/horizon" className="hover:text-fg">
                2030 predictions
              </Link>
            </li>
            <li>
              <Link to="/2050" className="hover:text-fg">
                2050 predictions
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
            Primary sources
          </p>
          <ul className="mt-3 space-y-2">
            {sources.slice(0, 5).map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 font-mono text-[11px] tracking-wide text-subtle sm:px-6">
          {ISSUE.kicker} · Made by {ISSUE.author} · Reporting current as of early
          September 2026 · Forecasts are not facts
        </p>
      </div>
    </footer>
  );
}
