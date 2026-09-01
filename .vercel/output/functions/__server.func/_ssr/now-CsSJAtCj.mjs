import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as events, n as cn } from "./router-vCnDSmEN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/now-CsSJAtCj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "promise",
		label: "Mostly good"
	},
	{
		id: "risk",
		label: "Mostly hard"
	},
	{
		id: "both",
		label: "Double-edged"
	}
];
function NowPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => filter === "all" ? events : events.filter((e) => e.stance === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-steel uppercase",
				children: "The record · 2025–2026"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: "What is actually happening"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted leading-relaxed",
				children: "Not a prediction deck. These are public facts and reported figures from the last 18 months: government testing, lab products, revenue, safety scoreboards, and the energy bill behind the chat window."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				role: "tablist",
				"aria-label": "Filter",
				children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": filter === f.id,
					onClick: () => setFilter(f.id),
					className: cn("inline-flex min-h-11 items-center rounded-md border px-4 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-150", filter === f.id ? "border-accent bg-accent text-accent-fg" : "border-border text-muted hover:text-fg"),
					children: f.label
				}, f.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10",
				children: list.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative border-l border-border pl-6 pb-10 last:pb-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-steel" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[11px] tracking-[0.14em] text-steel uppercase",
							children: [
								e.date,
								" · ",
								e.tag
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl",
							children: e.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-relaxed text-muted",
							children: e.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-mono text-[10px] text-subtle",
							children: [
								String(i + 1).padStart(2, "0"),
								" / ",
								String(list.length).padStart(2, "0")
							]
						})
					]
				}, e.id))
			})
		]
	});
}
//#endregion
export { NowPage as component };
