"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Base_1 = __importDefault(require("./Base"));
function Action({ eventName, cursor, position, event, element, run, moveCursor, options = {}, delay = 0, }) {
    return (react_1.default.createElement(Base_1.default, { delay: delay, cursor: cursor, position: position, run: run, moveCursor: moveCursor, element: element, type: "EVENT", options: options, info: ({ state, target }) => {
            let elemString;
            if (state === "iddle") {
                if ("root" in options) {
                    elemString = "exit";
                }
                else if ("target" in options) {
                    elemString = `$('${options.target}')`;
                }
                else {
                    elemString = element.tagName;
                }
            }
            else {
                if ("root" in options) {
                    elemString = "exit";
                }
                else if ("target" in options) {
                    elemString = `<${target === null || target === void 0 ? void 0 : target.tagName.toLowerCase()}`;
                    const { attributes } = element;
                    for (const attr of attributes) {
                        elemString += ` ${attr}`;
                    }
                    elemString += "/>";
                }
                else {
                    elemString = element.tagName;
                }
            }
            return (react_1.default.createElement("div", { style: { display: "flex", gap: 6, alignItems: "center" } },
                react_1.default.createElement("div", null, eventName),
                react_1.default.createElement("div", null, elemString),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("pre", null, JSON.stringify(event)))));
        } }));
}
exports.default = Action;
