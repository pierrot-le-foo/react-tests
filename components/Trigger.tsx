import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";
import Action from "./Action";
import { TestItemExtraProps } from "./Test";

interface TriggerProps {
  eventName: string;
  element: HTMLElement;
  cursor: number;
  position: number;
  moveCursor(): void;
  event: SyntheticEvent;
  options?: TestItemExtraProps;
}

export function Trigger({
  eventName,
  element,
  cursor,
  position,
  moveCursor,
  event,
  options,
}: TriggerProps) {
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

  console.log('Trigger', {options})

  return (
    <Action
      eventName={eventName}
      cursor={cursor}
      position={position}
      moveCursor={moveCursor}
      event={event}
      element={element}
      options={options}
      run={async (elem) => {
        console.log({ elem: { ...elem } });
        if (elem) {
          const letters = eventName.split("");
          const first = letters.shift() as string;
          const triggerName = `on${first.toUpperCase()}${letters.join("")}`;

          console.log({ triggerName });

          const elemKeys = Object.keys(elem).filter(
            (key) => !/^\d+$/.test(key.toString())
          );

          const elemProps = elem[
            elemKeys[1] as keyof typeof elem
          ] as Record<string, any>;

          console.log({ elemProps, elemKeys });

          if (
            typeof elemProps[triggerName as keyof typeof elemProps] ===
            "function"
          ) {
            elemProps[triggerName](event);
            return true;
          }
        }

        return false;
      }}
    />
  );
}
