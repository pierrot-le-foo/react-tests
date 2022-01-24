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
exports.Trigger = void 0;
const react_1 = __importDefault(require("react"));
const Action_1 = __importDefault(require("./Action"));
function Trigger({ eventName, element, cursor, position, moveCursor, event, options, }) {
    return (react_1.default.createElement(Action_1.default, { eventName: eventName, cursor: cursor, position: position, moveCursor: moveCursor, event: event, element: element, options: options, delay: 350, run: (elem) => __awaiter(this, void 0, void 0, function* () {
            if (elem) {
                const letters = eventName.split("");
                const first = letters.shift();
                const triggerName = `on${first.toUpperCase()}${letters.join("")}`;
                const elemKeys = Object.keys(elem).filter((key) => !/^\d+$/.test(key.toString()));
                const elemProps = elem[elemKeys[1]];
                if (typeof elemProps[triggerName] ===
                    "function") {
                    elemProps[triggerName](event);
                    return true;
                }
            }
            return false;
        }) }));
}
exports.Trigger = Trigger;
