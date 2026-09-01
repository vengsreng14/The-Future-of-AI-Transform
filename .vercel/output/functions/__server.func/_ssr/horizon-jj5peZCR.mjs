import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as fields, d as scenarios, n as cn, s as predictions2030 } from "./router-vCnDSmEN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/horizon-jj5peZCR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HorizonPage() {
	const [open, setOpen] = (0, import_react.useState)(fields[0]?.id ?? "health");
	const field = fields.find((f) => f.id === open) ?? fields[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-steel uppercase",
				children: "Predictions · 2030"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl",
				children: "Four years of compounding — then the 2050 question"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl leading-relaxed text-muted",
				children: "OECD and the UK government both refuse a single story. Progress could stall, grind, or take off. Lab CEOs lean toward takeoff around 2030. Most institutional papers still treat a measured climb as the base case. The cards below are concrete 2030 bets, then fields."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-3 lg:grid-cols-3",
				children: scenarios.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
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
				children: "What we expect by 2030"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted",
				children: "Each line is a prediction, not a promise. Stance marks upside, downside, or both."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-3 md:grid-cols-2",
				children: predictions2030.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-xl border border-border-strong bg-elevated px-5 py-6 sm:px-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.16em] text-steel uppercase",
						children: "Next horizon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl",
						children: "Then 2050"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
						children: "If the 2030 takeoff happens, 2050 is a superintelligence problem. If it does not, 2050 is still robots, medicine, and a politics of AI rents. That brief is separate on purpose."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/2050",
						className: "mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-fg",
						children: ["Open the 2050 predictions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 font-display text-3xl",
				children: "By field"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted",
				children: "Each card is now / promise / risk — not a slogan."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setOpen(f.id);
						document.getElementById(f.id)?.scrollIntoView({
							behavior: "smooth",
							block: "start"
						});
					},
					className: cn("inline-flex min-h-11 items-center rounded-md border px-4 text-sm transition-colors duration-150", open === f.id ? "border-accent bg-accent text-accent-fg" : "border-border text-muted hover:text-fg"),
					children: f.title
				}, f.id))
			}),
			field ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				id: field.id,
				className: "mt-8 scroll-mt-24 rounded-xl border border-border bg-surface p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.16em] text-steel uppercase",
						children: field.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-3xl",
						children: field.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-8 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								label: "Now",
								text: field.now
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								label: "Promise",
								text: field.promise,
								tone: "promise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								label: "Risk",
								text: field.risk,
								tone: "risk"
							})
						]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-3 md:grid-cols-2",
				children: fields.filter((f) => f.id !== field?.id).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					id: f.id,
					onClick: () => setOpen(f.id),
					className: "scroll-mt-24 rounded-xl border border-border p-5 text-left hover:bg-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
							children: f.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-xl",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-3 text-sm text-muted",
							children: f.now
						})
					]
				}, f.id))
			})
		]
	});
}
function Block({ label, text, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("font-mono text-[11px] tracking-[0.16em] uppercase", tone === "promise" && "text-promise", tone === "risk" && "text-risk", !tone && "text-subtle"),
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 text-sm leading-relaxed text-muted",
		children: text
	})] });
}
//#endregion
export { HorizonPage as component };
