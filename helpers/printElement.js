"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printElement = void 0;
function printElement(element) {
    if (typeof element === "string") {
        return `$('${element}')`;
    }
    let elemString;
    elemString = `<${element.tagName.toLowerCase()}`;
    const { attributes } = element;
    for (const attr of attributes) {
        elemString += ` ${attr}`;
    }
    elemString += "/>";
    return elemString;
}
exports.printElement = printElement;
