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
const react_1 = __importStar(require("react"));
const Click_1 = require("./Click");
const HasText_1 = require("./HasText");
const HasType_1 = require("./HasType");
const Trigger_1 = require("./Trigger");
const Wait_1 = require("./Wait");
const orientations = ["column", "row", "column-reverse", "row-reverse"];
function Test({ tests, Component, props = {}, label = "", autoStart = false, }) {
    const [ready, setReady] = (0, react_1.useState)(false);
    const [element, setElement] = (0, react_1.useState)();
    const [cursor, setCursor] = (0, react_1.useState)(-1);
    const [done, setDone] = (0, react_1.useState)(false);
    const finalLabel = label || Component.displayName || Component.name || "Testing";
    const moveCursor = (0, react_1.useCallback)(() => {
        if (cursor === 0) {
            console.log("Starting tests");
        }
        const nextCursor = cursor + 1;
        const nextTest = tests[nextCursor];
        if (nextTest) {
            setCursor(nextCursor);
            console.log("%cMoving cursor", "color: grey; font-weight: bold", cursor, nextCursor, nextTest);
        }
        else {
            console.log("TEST DONE");
            setDone(true);
        }
    }, [cursor]);
    const ref = (0, react_1.useRef)();
    const refresh = () => setElement(ref.current.firstChild);
    (0, react_1.useEffect)(() => {
        setReady(Boolean(ref.current.firstChild));
        setElement(ref.current.firstChild);
        if (autoStart) {
            console.log("GO");
            setCursor(0);
        }
    }, [ref]);
    const [mounted] = (0, react_1.useState)(react_1.default.createElement(Component, Object.assign({}, props)));
    (0, react_1.useEffect)(() => {
        console.log(`%cTesting "${finalLabel}"`, "color: #369; font-weight: bold", {
            autoStart,
        });
    }, []);
    const [orientation, setOrientation] = (0, react_1.useState)(0);
    const toggleOrientation = (0, react_1.useCallback)(() => {
        let nextOrientation = orientation + 1;
        if (!orientations[nextOrientation]) {
            nextOrientation = 0;
        }
        setOrientation(nextOrientation);
    }, [orientation]);
    return (react_1.default.createElement("div", { style: {
            backgroundColor: "#333",
            // height: '100vh',
        } },
        react_1.default.createElement("style", null, `
      .rotate {
        animation: rotate 1.5s linear infinite; 
      }

      @keyframes rotate {
        to{ transform: rotate(360deg); }
      }
      `),
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { onClick: () => setCursor(0), disabled: cursor >= 0 && !done, style: { fontSize: 42 } }, "\uD83D\uDE80"),
            react_1.default.createElement("button", { onClick: toggleOrientation, style: { fontSize: 34 } }, "\u2935")),
        react_1.default.createElement("div", { style: {
                display: "flex",
                flexDirection: orientations[orientation],
            } },
            react_1.default.createElement("div", { ref: ref, style: { flex: 1, backgroundColor: "white" } }, mounted),
            react_1.default.createElement("div", { style: { flex: 1 } },
                done && (react_1.default.createElement("h2", { "data-testid": "react-tests-done", style: { color: "white" } }, "Done")),
                react_1.default.createElement("ul", { style: {
                        overflow: "auto",
                        listStyleType: "none",
                        padding: 0,
                    } }, ready &&
                    Boolean(element) &&
                    tests.map((TestItem, testIndex) => (react_1.default.createElement("li", { key: testIndex, style: {
                            color: "#eee",
                            padding: "16px 8px",
                            borderBottom: "1px solid #ccc",
                        } },
                        react_1.default.createElement(TestItem, { element: element, refresh: refresh, cursor: cursor, position: testIndex, moveCursor: moveCursor })))))))));
}
exports.default = Test;
Test.hasType =
    (type) => ({ element, cursor, position, moveCursor, }) => (react_1.default.createElement(HasType_1.HasType, { type: type, element: element, cursor: cursor, position: position, moveCursor: moveCursor }));
Test.hasText =
    (text, extraProps) => (props) => react_1.default.createElement(HasText_1.HasText, Object.assign({ text: text }, props, { options: extraProps }));
Test.click = (extraProps) => (props) => react_1.default.createElement(Click_1.Click, Object.assign({}, props, { options: extraProps }));
Test.wait =
    (milliseconds) => ({ cursor, position, moveCursor, }) => (react_1.default.createElement(Wait_1.Wait, { milliseconds: milliseconds, cursor: cursor, position: position, moveCursor: moveCursor }));
function trigger(eventName, event, extraProps) {
    return (props) => (react_1.default.createElement(Trigger_1.Trigger, Object.assign({}, props, { eventName: eventName, event: event, options: extraProps })));
}
Test.trigger = trigger;
