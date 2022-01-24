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
exports.Click = void 0;
const react_1 = __importDefault(require("react"));
const printElement_1 = require("../helpers/printElement");
const Base_1 = __importDefault(require("./Base"));
function Click({ options = {}, element, cursor, position, moveCursor, }) {
    return (react_1.default.createElement(Base_1.default, { cursor: cursor, position: position, moveCursor: moveCursor, element: element, type: "CLICK", options: options, delay: 350, info: () => react_1.default.createElement("div", null,
            react_1.default.createElement("div", null, (0, printElement_1.printElement)(options.target || element))), run: (elem) => __awaiter(this, void 0, void 0, function* () {
            if (elem && typeof elem.scrollIntoView === "function") {
                elem.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest",
                });
            }
            if (elem) {
                elem.click();
                return true;
            }
            return false;
        }) }));
}
exports.Click = Click;
