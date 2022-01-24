"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
const react_1 = __importDefault(require("react"));
const Base_1 = __importDefault(require("./Base"));
function Result({ label, expect, toEqual, toMatch, cursor, position, moveCursor, element, }) {
    return (react_1.default.createElement(Base_1.default, { cursor: cursor, element: element, position: position, moveCursor: moveCursor, type: "ASSERT", info: () => react_1.default.createElement("div", null), run: () => __awaiter(this, void 0, void 0, function* () { return true; }) }));
}
exports.Result = Result;
