import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as predictions2050, f as scenarios2050, n as cn } from "./router-vCnDSmEN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/2050-DJ4gC9Zx.js
var import_jsx_runtime = require_jsx_runtime();
function FarPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-steel uppercase",
				children: "After 2030 · Horizon 2050"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl",
				children: "Twenty-five years is long enough for the 2030 bet to have paid — or failed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl leading-relaxed text-muted",
				children: "2030 is still an extrapolation of 2026. 2050 is a different kind of claim: either superintelligence has already arrived, or the lab-CEO timeline was wrong and we live with very strong tools instead. Older expert surveys put a 50% chance of human-level machine intelligence around 2040–2050, then a hop to superintelligence in years to decades. Treat every card as a scenario, not a schedule."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					"Read 2030 first if you skipped it —",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/horizon",
						className: "text-fg underline underline-offset-4",
						children: "the near horizon"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-3 lg:grid-cols-3",
				children: scenarios2050.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.16em] text-steel uppercase",
							children: s.odds
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: s.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted",
							children: s.body
						})
					]
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 font-display text-3xl",
				children: "Predictions for 2050"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted",
				children: "Good and bad, labeled. Confidence is how much 2026 evidence supports the direction — not a probability of the exact headline."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-3 md:grid-cols-2",
				children: predictions2050.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("font-mono text-[10px] tracking-[0.16em] uppercase", p.stance === "promise" && "text-promise", p.stance === "risk" && "text-risk", p.stance === "both" && "text-steel"),
								children: p.stance === "promise" ? "Upside" : p.stance === "risk" ? "Downside" : "Fork"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] tracking-[0.12em] text-subtle uppercase",
								children: p.confidence
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-xl",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: p.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 font-mono text-[10px] leading-relaxed tracking-wide text-subtle",
							children: ["Basis · ", p.basis]
						})
					]
				}, p.id))
			})
		]
	});
}
//#endregion
export { FarPage as component };
