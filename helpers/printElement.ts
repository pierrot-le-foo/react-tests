export function printElement(element: string | HTMLElement) {
  let elemString;

  if (typeof element === "string") {
    return `$('${element}')`;
  }

  elemString = `<${element.tagName.toLowerCase()}`;

  const { attributes } = element;

  for (const attr of attributes) {
    elemString += ` ${attr}`;
  }

  elemString += "/>";

  return elemString;
}
