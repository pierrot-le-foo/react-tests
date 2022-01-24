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
exports.WaitForElement = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("react");
function WaitForElement({ element, selector, children: Component, }) {
    const [retries, setRetries] = (0, react_2.useState)(0);
    const retry = (0, react_2.useCallback)(() => setRetries(retries + 1), [retries]);
    const found = element.querySelector(selector);
    (0, react_1.useEffect)(() => {
        if (!found && retries < 25) {
            retry();
        }
    }, [found, retries]);
    if (!found) {
        return react_1.default.createElement("div", { className: "rotate" }, "\u29D6");
    }
    return react_1.default.createElement(Component, { element: found });
}
exports.WaitForElement = WaitForElement;
