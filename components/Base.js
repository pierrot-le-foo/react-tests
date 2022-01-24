"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function Base({ cursor, position, options = {}, element, run, moveCursor, type, info, delay }) {
    const [state, setState] = (0, react_1.useState)("iddle");
    const [target, setTarget] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        if (cursor === position && !target) {
            setState("running");
            let elem = null;
            if ("root" in options) {
                const root = window.document.querySelector(options.root);
                if (root) {
                    if ("target" in options) {
                        elem = root.querySelector(options.target);
                    }
                    else {
                        elem = root;
                    }
                }
            }
            else if ("target" in options) {
                elem = element.querySelector(options.target);
            }
            else {
                elem = element;
            }
            if (elem) {
                setTarget(elem);
            }
        }
    }, [cursor, position, options, element]);
    (0, react_1.useEffect)(() => {
        if (state === "running" && target) {
            run(target)
                .then((res) => {
                if (res) {
                    setState("ok");
                    if (delay) {
                        setTimeout(moveCursor, delay);
                    }
                    else {
                        moveCursor();
                    }
                }
                else {
                    setState("failed");
                }
            })
                .catch((error) => {
                setState("failed");
            });
        }
    }, [target, state]);
    return (react_1.default.createElement("div", { style: { display: "flex", gap: 6, alignItems: "center" } },
        react_1.default.createElement("div", null,
            state === "running" && react_1.default.createElement("div", { className: "rotate" }, "\u29D6"),
            state === "ok" && (react_1.default.createElement("div", { style: { fontWeight: "bold", color: "green" } }, "\u2714")),
            state === "failed" && (react_1.default.createElement("div", { style: { fontWeight: "bold", color: "red" } }, "\u2716"))),
        react_1.default.createElement("div", null, type),
        react_1.default.createElement("div", null, info && info({ state, target }))));
}
exports.default = Base;
