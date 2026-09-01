import { Link } from "@tanstack/react-router";
import type { Person } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PersonCard({ person, featured }: { person: Person; featured?: boolean }) {
  return (
    <Link
      to="/power"
      hash={person.id}
      className={cn(
        "group flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors duration-150 hover:border-border-strong",
        featured && "md:p-6",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "grid size-11 place-items-center rounded-md bg-elevated font-mono text-xs tracking-widest text-steel",
            featured && "size-12 text-sm",
          )}
          aria-hidden
        >
          {person.initials}
        </span>
        <span className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
          {person.category}
        </span>
      </div>
      <h3
        className={cn(
          "mt-4 font-display text-xl tracking-tight",
          featured && "text-2xl",
        )}
      >
        {person.name}
      </h3>
      <p className="mt-1 text-sm text-muted">
        {person.role}, {person.org}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-fg/90">{person.lever}</p>
    </Link>
  );
}
