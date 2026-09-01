import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, r as Minus } from "../_libs/lucide-react.mjs";
import { a as fields, d as scenarios, i as events, l as promises, n as cn, o as people, r as ISSUE, s as predictions2030, u as risks } from "./router-vCnDSmEN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ZcWUBaZU.js
var import_jsx_runtime = require_jsx_runtime();
function PersonCard({ person, featured }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/power",
		hash: person.id,
		className: cn("group flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors duration-150 hover:border-border-strong", featured && "md:p-6"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid size-11 place-items-center rounded-md bg-elevated font-mono text-xs tracking-widest text-steel", featured && "size-12 text-sm"),
					"aria-hidden": true,
					children: person.initials
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
					children: person.category
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: cn("mt-4 font-display text-xl tracking-tight", featured && "text-2xl"),
				children: person.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					person.role,
					", ",
					person.org
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-fg/90",
				children: person.lever
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.2em] text-steel uppercase",
						children: ISSUE.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 max-w-4xl font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl",
						children: ["AI is no longer a demo.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-muted",
							children: "By 2030 it is infrastructure — for science, work, and power."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
						children: [ISSUE.tagline, " This briefing uses what is already on the record in 2026: lab products, government evals, job forecasts, and the people who actually run the stack."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/now",
							className: "inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 font-medium text-accent-fg transition-opacity duration-150 hover:opacity-90",
							children: ["What is happening now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/power",
							className: "inline-flex min-h-11 items-center gap-2 rounded-md border border-border-strong px-5 text-fg transition-colors duration-150 hover:bg-elevated",
							children: "Who holds power"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						n: "~2030",
						l: "Hassabis’s AGI window",
						d: "DeepMind’s CEO has said general intelligence could arrive around 2030, plus or minus a year."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						n: "$30B",
						l: "Anthropic run-rate, 2026",
						d: "Reported annualized revenue ahead of OpenAI’s consumer giant — enterprise is where the money is."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						n: "5 labs",
						l: "U.S. pre-release tests",
						d: "CAISI agreements now cover OpenAI, Anthropic, DeepMind, Microsoft, and xAI/SpaceXAI."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				kicker: "The record",
				title: "Happening now",
				to: "/now",
				link: "Full timeline"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 divide-y divide-border border-y border-border",
				children: events.slice(0, 4).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-2 py-5 sm:grid-cols-12 sm:gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] tracking-[0.14em] text-steel uppercase sm:col-span-3",
						children: [e.date, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-subtle",
							children: e.tag
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: e.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-3xl text-sm leading-relaxed text-muted",
							children: e.body
						})]
					})]
				}, e.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border px-4 py-12 sm:px-6 lg:border-r lg:border-b-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.2em] text-promise uppercase",
							children: "The promise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl",
							children: "What goes right"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-6",
							children: promises.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: p.body
							})] }, p.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/promise",
							className: "mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-fg",
							children: ["Read the upside ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 py-12 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.2em] text-risk uppercase",
							children: "The risk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl",
							children: "What goes wrong"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-6",
							children: risks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: p.body
							})] }, p.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/risk",
							className: "mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-fg",
							children: ["Read the downside ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
					kicker: "The stack",
					title: "People who hold the levers",
					to: "/power",
					link: "All twelve"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Elon Musk is one node — models, robots, a social network, and (as of 2026 reporting) SpaceXAI. He is not the only one. Chips, clouds, open weights, and public warnings are power too."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: people.slice(0, 6).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonCard, {
						person: p,
						featured: p.id === "musk"
					}, p.id))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
						kicker: "Through 2030",
						title: "Three futures still in play",
						to: "/horizon",
						link: "2030 predictions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-3 lg:grid-cols-3",
						children: scenarios.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] tracking-[0.16em] text-steel uppercase",
									children: s.odds
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-3 md:grid-cols-2",
						children: predictions2030.slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-[10px] tracking-[0.16em] text-steel uppercase",
									children: ["2030 · ", p.confidence]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-3 text-sm text-muted",
									children: p.body
								})
							]
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/horizon",
						className: "mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-fg",
						children: ["All eight 2030 bets ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
						children: fields.slice(0, 4).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/horizon",
							hash: f.id,
							className: "bg-bg p-5 transition-colors duration-150 hover:bg-elevated",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
									children: f.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-xl",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 line-clamp-4 text-sm text-muted",
									children: f.now
								})
							]
						}, f.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 rounded-xl border border-border-strong bg-elevated p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-[0.2em] text-steel uppercase",
								children: "After that · 2050"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl",
								children: "Superintelligence, a split planet, or just stronger tools"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
								children: "If the 2030 AGI window is real, 2050 is about what comes after human-level systems. If it is not, 2050 is still robots in the economy, redesigned biology, and a fight over who gets the surplus. Both futures are on the record."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/2050",
								className: "mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 font-medium text-accent-fg",
								children: ["2050 predictions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					})
				]
			})
		})
	] });
}
function Stat({ n, l, d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-border px-4 py-8 sm:px-6 md:border-b-0 md:border-r md:last:border-r-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl tracking-tight",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-medium",
				children: l
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: d
			})
		]
	});
}
function Header({ kicker, title, to, link }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-end justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-subtle uppercase",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
				className: "size-3",
				"aria-hidden": true
			}), kicker]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 font-display text-3xl",
			children: title
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to,
			className: "inline-flex min-h-11 items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-steel uppercase",
			children: [
				link,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })
			]
		})]
	});
}
//#endregion
export { Home as component };
