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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Test_1 = __importDefault(require("../components/Test"));
// A view that display a cursor that increments on each click
function Counter() {
    const [counter, setCounter] = (0, react_1.useState)(0);
    const increment = (0, react_1.useCallback)(() => setCounter(counter + 1), [counter]);
    return react_1.default.createElement("button", { onClick: increment }, counter);
}
// Testing the view in the UI
function TestCounter({ autoStart = false }) {
    return (react_1.default.createElement(Test_1.default, { Component: Counter, tests: [Test_1.default.hasText("0"), Test_1.default.click(), Test_1.default.hasText("1")], autoStart: autoStart }));
}
exports.default = TestCounter;
