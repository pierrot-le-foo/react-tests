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
    // const [valid, setValid] = useState<boolean | null>(null);
    // const [notFound, setNotFound] = useState(false);
    // const [retries, setRetries] = useState(0);
    // const retry = useCallback(() => setRetries(retries + 1), [retries]);
    // const change = useCallback(async () => {
    //   setTimeout(() => {});
    //   setNotFound(false);
    //   if (selector) {
    //     const elem = parent
    //       ? document.querySelector(parent.concat(' ', selector))
    //       : element.querySelector(selector);
    //   } else {
    //     const elemProps = element[Object.keys(element)[1] as keyof typeof element] as Record<string, any>;
    //     if (typeof elemProps[triggerName as keyof typeof elemProps] === "function") {
    //       elemProps[triggerName](event);
    //       setValid(true);
    //       setTimeout(moveCursor, 350);
    //       console.log(`%cCHANGE`, "color: green", event, selector);
    //     }
    //   }
    // }, [selector, element, retries, cursor]);
    // let icon = "_";
    // if (typeof valid === "boolean") {
    //   icon = valid ? "✅" : "❌";
    // }
    // useEffect(() => {
    //   if (!valid && retries < 100 && cursor === position) {
    //     const fn = setTimeout(change, 100);
    //     return () => clearTimeout(fn);
    //   } else if (retries >= 100) {
    //     // console.log(element, document.querySelector(selector as string));
    //   }
    // }, [valid, retries, cursor, position]);
    // return (
    //   <div>
    //     <div>
    //       {icon} {label || `${eventName} ${selector} TO ${JSON.stringify(event)}`}
    //     </div>
    //     {notFound && <div>Selector not found</div>}
    //   </div>
    // );
    console.log('Trigger', { options });
    return (react_1.default.createElement(Action_1.default, { eventName: eventName, cursor: cursor, position: position, moveCursor: moveCursor, event: event, element: element, options: options, run: (elem) => __awaiter(this, void 0, void 0, function* () {
            console.log({ elem: Object.assign({}, elem) });
            if (elem) {
                const letters = eventName.split("");
                const first = letters.shift();
                const triggerName = `on${first.toUpperCase()}${letters.join("")}`;
                console.log({ triggerName });
                const elemKeys = Object.keys(elem).filter((key) => !/^\d+$/.test(key.toString()));
                const elemProps = elem[elemKeys[1]];
                console.log({ elemProps, elemKeys });
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
