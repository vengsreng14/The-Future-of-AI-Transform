import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as fields, u as risks } from "./router-vCnDSmEN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/risk-iavtWmG6.js
var import_jsx_runtime = require_jsx_runtime();
function RiskPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-risk uppercase",
				children: "Downside"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: "The bad future is already leaking in"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 leading-relaxed text-muted",
				children: "Deepfakes, labor shakeouts, energy draw, and concentrated control are not 2030 problems. They are 2026 problems that get worse if capability keeps climbing. Geoffrey Hinton’s list — misinformation, weapons, loss of control — is the skeleton. The flesh is agents that act, labs that score poorly on safety indexes, and a public that did not elect a CEO."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-8",
				children: risks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
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
				children: "Field by field"
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
						children: f.risk
					})]
				}, f.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-sm text-muted",
				children: [
					"Governance is moving: CAISI pre-deployment tests, safety scoreboards, biosecurity evals. It is slower than the models. The other half of the ledger is",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/promise",
						className: "text-fg underline underline-offset-4",
						children: "the promise"
					}),
					"."
				]
			})
		]
	});
}
//#endregion
export { RiskPage as component };
