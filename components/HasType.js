"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasType = void 0;
const Result_1 = require("./Result");
const react_1 = __importDefault(require("react"));
function HasType({ type, element, cursor, position, moveCursor }) {
    return (react_1.default.createElement(Result_1.Result, { label: `HAS TYPE ${type}`, expect: () => element.tagName.toLowerCase(), toEqual: type, cursor: cursor, position: position, moveCursor: moveCursor, element: element }));
}
exports.HasType = HasType;
