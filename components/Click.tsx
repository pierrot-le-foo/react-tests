import React, { useEffect, useState } from "react";

export interface ClickProps {
  selector?: string;
  element: HTMLElement;
  cursor: number;
  position: number;
  moveCursor(): void;
  parent?: string;
  label?: string;
}

export function Click({
  selector,
  element,
  cursor,
  position,
  moveCursor,
  parent = "",
  label,
}: ClickProps) {
  const [valid, setValid] = useState(null);

  useEffect(() => {
    if (cursor === position) {
      console.log(`%cCLICK`, "color: orange", selector);
      if (selector) {
        const elem = parent
          ? document.querySelector(parent.concat(" ", selector))
          : element.querySelector(selector);
        if (elem) {
          if (typeof elem.scrollIntoView === "function") {
            elem.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }

          (elem as HTMLElement).click();
          setValid(true);
          console.log(`%cCLICK`, "color: green", selector);
          setTimeout(moveCursor, 350);
        } else {
          setValid(false);
        }
      } else {
        if (typeof element.scrollIntoView === "function") {
          element.scrollIntoView();
        }
        element.click();
        setValid(true);
        console.log(`%cCLICK`, "color: green", selector);
        setTimeout(moveCursor, 350);
      }
    }
  }, [cursor, position]);

  let icon = "_";

  if (typeof valid === "boolean") {
    icon = valid ? "✅" : "❌";
  }

  return (
    <div>
      {icon} {label || `CLICK ${selector}`}
    </div>
  );
}
