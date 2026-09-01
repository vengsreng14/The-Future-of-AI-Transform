import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ISSUE } from "@/lib/content";

const links = [
  { to: "/", label: "Briefing" },
  { to: "/now", label: "Now" },
  { to: "/promise", label: "Promise" },
  { to: "/risk", label: "Risk" },
  { to: "/power", label: "Power" },
  { to: "/horizon", label: "2030" },
  { to: "/2050", label: "2050" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          to="/"
          className="flex min-h-11 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-8 place-items-center rounded-sm border border-border-strong font-mono text-[10px] tracking-[0.18em] text-steel">
            S
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-medium tracking-tight">
              {ISSUE.name}
            </span>
            <span className="mt-1 hidden font-mono text-[10px] tracking-[0.14em] text-muted uppercase sm:block">
              {ISSUE.kicker}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "inline-flex min-h-11 items-center px-3 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-150",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-border text-fg md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav
          className="border-t border-border px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={cn(
                    "flex min-h-12 items-center border-b border-border font-mono text-xs tracking-[0.16em] uppercase",
                    pathname === l.to ? "text-fg" : "text-muted",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
