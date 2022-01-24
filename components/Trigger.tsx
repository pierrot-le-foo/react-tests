import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";

interface TriggerProps {
  eventName: string;
  selector?: string;
  element: HTMLElement;
  cursor: number;
  position: number;
  moveCursor(): void;
  event: SyntheticEvent;
  label?: string;
  parent?: string
}

export function Trigger({
  eventName,
  selector,
  element,
  cursor,
  position,
  moveCursor,
  event,
  parent = '',
  label,
}: TriggerProps) {
  const [valid, setValid] = useState<boolean | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [retries, setRetries] = useState(0);

  const letters = eventName.split("");
  const first = letters.shift() as string;

  const triggerName = `on${first.toUpperCase()}${letters.join("")}`;

  const retry = useCallback(() => setRetries(retries + 1), [retries]);

  const change = useCallback(async () => {
    setTimeout(() => {});
    setNotFound(false);
    if (selector) {
      const elem = parent
        ? document.querySelector(parent.concat(' ', selector))
        : element.querySelector(selector);
      if (elem) {
        const elemProps = elem[Object.keys(elem)[1] as keyof typeof elem] as Record<string, any>;
        if (typeof elemProps[triggerName as keyof typeof elemProps] === "function") {
          elemProps[triggerName](event);
          setValid(true);
          setTimeout(moveCursor, 350);
          console.log(`%cCHANGE`, "color: green", event, selector);
        }
      } else {
        setValid(false);
        setNotFound(true);
        retry();
      }
    } else {
      const elemProps = element[Object.keys(element)[1] as keyof typeof element] as Record<string, any>;
      if (typeof elemProps[triggerName as keyof typeof elemProps] === "function") {
        elemProps[triggerName](event);
        setValid(true);
        setTimeout(moveCursor, 350);
        console.log(`%cCHANGE`, "color: green", event, selector);
      }
    }
  }, [selector, element, retries, cursor]);

  useEffect(() => {
    if (cursor === position) {
      console.log(`%c#${position} CHANGE`, "color: orange", event, selector);
      change();
    }
  }, [cursor, position]);

  let icon = "_";

  if (typeof valid === "boolean") {
    icon = valid ? "✅" : "❌";
  }

  useEffect(() => {
    if (!valid && retries < 100 && cursor === position) {
      const fn = setTimeout(change, 100);
      return () => clearTimeout(fn);
    } else if (retries >= 100) {
      // console.log(element, document.querySelector(selector as string));
    }
  }, [valid, retries, cursor, position]);

  return (
    <div>
      <div>
        {icon} {label || `${eventName} ${selector} TO ${JSON.stringify(event)}`}
      </div>
      {notFound && <div>Selector not found</div>}
    </div>
  );
}
