export function printElement(element: string | HTMLElement) {
  if (typeof element === "string") {
    return `$('${element}')`;
  }

  let elemString;

  elemString = `<${element.tagName.toLowerCase()} />`;

  return elemString;
}
