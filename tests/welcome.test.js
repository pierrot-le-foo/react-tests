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
require("@testing-library/jest-dom");
const react_1 = require("@testing-library/react");
const react_2 = __importDefault(require("react"));
const events_1 = __importDefault(require("../examples/events"));
test("Welcome", () => __awaiter(void 0, void 0, void 0, function* () {
    (0, react_1.render)(react_2.default.createElement(events_1.default, { autoStart: true }));
    // await new Promise(resolve => setTimeout(resolve, 2000))
    yield (0, react_1.waitFor)(() => react_1.screen.findAllByTestId("react-tests-done"));
}));
