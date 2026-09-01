import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn, o as people } from "./router-vCnDSmEN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/power-BECR3RDQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cats = [
	{
		id: "all",
		label: "Everyone"
	},
	{
		id: "lab",
		label: "Frontier labs"
	},
	{
		id: "platform",
		label: "Platforms"
	},
	{
		id: "chips",
		label: "Chips"
	},
	{
		id: "open",
		label: "Open weights"
	},
	{
		id: "critic",
		label: "Critics & science"
	}
];
function PowerPage() {
	const [cat, setCat] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => cat === "all" ? people : people.filter((p) => p.category === cat), [cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-steel uppercase",
				children: "Power"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl",
				children: "A small set of people sit on models, chips, clouds, and feeds"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl leading-relaxed text-muted",
				children: "Elon Musk is the most visible: Grok, Tesla robots, X, Neuralink, and — in 2026 reporting — xAI absorbed into SpaceXAI. Visibility is not the same as monopoly. NVIDIA sells the picks and shovels. Microsoft and Google own the workplace and the search bar. Anthropic and OpenAI fight over enterprise. DeepSeek and Meta leak capability into the open."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCat(c.id),
					className: cn("inline-flex min-h-11 items-center rounded-md border px-4 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-150", cat === c.id ? "border-accent bg-accent text-accent-fg" : "border-border text-muted hover:text-fg"),
					children: c.label
				}, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-4",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					id: p.id,
					className: "scroll-mt-24 rounded-xl border border-border bg-surface p-5 sm:p-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 place-items-center rounded-md bg-elevated font-mono text-sm tracking-widest text-steel",
							children: p.initials
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
										children: p.category
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										p.role,
										" · ",
										p.org
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm font-medium text-steel",
									children: p.lever
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 leading-relaxed text-muted",
									children: p.bio
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 border-t border-border pt-4 text-sm leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
										children: "Now"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block",
										children: p.now
									})]
								})
							]
						})]
					})
				}, p.id))
			})
		]
	});
}
//#endregion
export { PowerPage as component };
