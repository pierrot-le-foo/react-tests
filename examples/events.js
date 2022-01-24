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
function Welcome() {
    const [language, setLanguage] = (0, react_1.useState)("");
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("select", { value: language, onChange: (e) => setLanguage(e.target.value) },
            react_1.default.createElement("option", { value: "french" }, "French"),
            react_1.default.createElement("option", { value: "spanish" }, "Spanish")),
        language === "french" && react_1.default.createElement("div", null, "Bonjour"),
        language === "spanish" && react_1.default.createElement("div", null, "Spanish")));
}
function TestWelcome({ autoStart = false }) {
    return (react_1.default.createElement(Test_1.default, { autoStart: autoStart, Component: () => (react_1.default.createElement("main", null,
            react_1.default.createElement(Welcome, null))), tests: [
            Test_1.default.trigger("change", {
                target: {
                    // @ts-ignore
                    value: "french",
                },
            }, { target: "select" }),
            Test_1.default.hasText("Bonjour", { target: "div" }),
        ] }));
}
exports.default = TestWelcome;
