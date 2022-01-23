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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trigger = void 0;
const react_1 = __importStar(require("react"));
function Trigger({ eventName, selector, element, cursor, position, moveCursor, event, parent = '', label, }) {
    const [valid, setValid] = (0, react_1.useState)(null);
    const [notFound, setNotFound] = (0, react_1.useState)(false);
    const [retries, setRetries] = (0, react_1.useState)(0);
    const letters = eventName.split("");
    const first = letters.shift();
    const triggerName = `on${first.toUpperCase()}${letters.join("")}`;
    const retry = (0, react_1.useCallback)(() => setRetries(retries + 1), [retries]);
    const change = (0, react_1.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
        setTimeout(() => { });
        setNotFound(false);
        if (selector) {
            const elem = parent
                ? document.querySelector(parent.concat(' ', selector))
                : element.querySelector(selector);
            if (elem) {
                const elemProps = elem[Object.keys(elem)[1]];
                if (typeof elemProps[triggerName] === "function") {
                    elemProps[triggerName](event);
                    setValid(true);
                    setTimeout(moveCursor, 350);
                    console.log(`%cCHANGE`, "color: green", event, selector);
                }
            }
            else {
                setValid(false);
                setNotFound(true);
                retry();
            }
        }
        else {
            const elemProps = element[Object.keys(element)[1]];
            if (typeof elemProps[triggerName] === "function") {
                elemProps[triggerName](event);
                setValid(true);
                setTimeout(moveCursor, 350);
                console.log(`%cCHANGE`, "color: green", event, selector);
            }
        }
    }), [selector, element, retries, cursor]);
    (0, react_1.useEffect)(() => {
        if (cursor === position) {
            console.log(`%c#${position} CHANGE`, "color: orange", event, selector);
            change();
        }
    }, [cursor, position]);
    let icon = "_";
    if (typeof valid === "boolean") {
        icon = valid ? "✅" : "❌";
    }
    (0, react_1.useEffect)(() => {
        if (!valid && retries < 100 && cursor === position) {
            const fn = setTimeout(change, 100);
            return () => clearTimeout(fn);
        }
        else if (retries >= 100) {
            // console.log(element, document.querySelector(selector as string));
        }
    }, [valid, retries, cursor, position]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            icon,
            " ",
            label || `${eventName} ${selector} TO ${JSON.stringify(event)}`),
        notFound && react_1.default.createElement("div", null, "Selector not found")));
}
exports.Trigger = Trigger;
