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
exports.Result = void 0;
const react_1 = __importStar(require("react"));
function Result({ label, expect, toEqual, toMatch, cursor, position, moveCursor, }) {
    const [valid, setValid] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (cursor === position) {
            if (toMatch) {
                setValid(toMatch.test(expect()));
            }
            else {
                setValid(expect() === toEqual);
            }
            moveCursor();
        }
    }, [cursor, position]);
    let color = "grey";
    let icon = "_";
    if (typeof valid === "boolean") {
        color = valid ? "green" : "red";
        icon = valid ? "✅" : "❌";
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: { color } },
            icon,
            " ",
            label),
        typeof valid === "boolean" && !valid && (react_1.default.createElement("div", null,
            "Was expecting ",
            JSON.stringify(expect()),
            " to equal",
            " ",
            JSON.stringify(toEqual)))));
}
exports.Result = Result;
