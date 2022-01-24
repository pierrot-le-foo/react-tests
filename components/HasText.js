"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasText = void 0;
const Result_1 = require("./Result");
const react_1 = __importDefault(require("react"));
function HasText({ text, element, cursor, position, moveCursor, options, }) {
    const props = {};
    if (text instanceof RegExp) {
        props.toMatch = text;
    }
    else {
        props.toEqual = text;
    }
    return (react_1.default.createElement(Result_1.Result, Object.assign({ expect: (elem) => elem.innerText }, props, { cursor: cursor, position: position, moveCursor: moveCursor, element: element, options: options, assertion: `has text ${text}` })));
}
exports.HasText = HasText;
