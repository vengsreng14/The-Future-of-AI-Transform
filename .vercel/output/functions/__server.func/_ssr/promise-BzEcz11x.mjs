import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as fields, l as promises } from "./router-vCnDSmEN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/promise-BzEcz11x.js
var import_jsx_runtime = require_jsx_runtime();
function PromisePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-promise uppercase",
				children: "Upside"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: "The good future is not marketing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 leading-relaxed text-muted",
				children: "The case for AI is strongest where it already left the slide: protein structure, coding, enterprise software, and early science. UK scenario work and Epoch’s 2030 note both treat large positive productivity and scientific gains as plausible even without a full AGI event."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-8",
				children: promises.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-surface p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: p.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed text-muted",
						children: p.body
					})]
				}, p.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-14 font-display text-2xl",
				children: "Where the upside lands first"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 divide-y divide-border border-y border-border",
				children: fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium",
						children: f.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: f.promise
					})]
				}, f.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-sm text-muted",
				children: [
					"None of this is automatic. The same labs that publish protein-design posts also train systems that can be probed on biosecurity. Read the other half:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/risk",
						className: "text-fg underline underline-offset-4",
						children: "the risk brief"
					}),
					"."
				]
			})
		]
	});
}
//#endregion
export { PromisePage as component };
