"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printElement = void 0;
function printElement(element) {
    if (typeof element === "string") {
        return `$('${element}')`;
    }
    let elemString;
    elemString = `<${element.tagName.toLowerCase()} />`;
    return elemString;
}
exports.printElement = printElement;
