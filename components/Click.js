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
exports.Click = void 0;
const react_1 = __importStar(require("react"));
function Click({ selector, element, cursor, position, moveCursor, parent = "", label, }) {
    const [valid, setValid] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (cursor === position) {
            console.log(`%cCLICK`, "color: orange", selector);
            if (selector) {
                const elem = parent
                    ? document.querySelector(parent.concat(" ", selector))
                    : element.querySelector(selector);
                if (elem) {
                    if (typeof elem.scrollIntoView === "function") {
                        elem.scrollIntoView({
                            behavior: "smooth",
                            block: "end",
                            inline: "nearest",
                        });
                    }
                    elem.click();
                    setValid(true);
                    console.log(`%cCLICK`, "color: green", selector);
                    setTimeout(moveCursor, 350);
                }
                else {
                    setValid(false);
                }
            }
            else {
                if (typeof element.scrollIntoView === "function") {
                    element.scrollIntoView();
                }
                element.click();
                setValid(true);
                console.log(`%cCLICK`, "color: green", selector);
                setTimeout(moveCursor, 350);
            }
        }
    }, [cursor, position]);
    let icon = "_";
    if (typeof valid === "boolean") {
        icon = valid ? "✅" : "❌";
    }
    return (react_1.default.createElement("div", null,
        icon,
        " ",
        label || `CLICK ${selector}`));
}
exports.Click = Click;
