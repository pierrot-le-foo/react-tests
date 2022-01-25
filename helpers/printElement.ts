export function printElement(element: string | HTMLElement) {
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
