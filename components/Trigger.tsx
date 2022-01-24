import React, { SyntheticEvent } from "react";
import Action from "./Action";
import { TestItemExtraProps } from "./Test";

interface TriggerProps<Element> {
  eventName: string;
  element: HTMLElement;
  cursor: number;
  position: number;
  moveCursor(): void;
  event: SyntheticEvent<Element>;
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
}: TriggerProps<Element>) {
  return (
    <Action<Element>
      eventName={eventName}
      cursor={cursor}
      position={position}
      moveCursor={moveCursor}
      event={event}
      element={element}
      options={options}
      delay={350}
      run={async (elem) => {
        if (elem) {
          const letters = eventName.split("");
          const first = letters.shift() as string;
          const triggerName = `on${first.toUpperCase()}${letters.join("")}`;

          const elemKeys = Object.keys(elem).filter(
            (key) => !/^\d+$/.test(key.toString())
          );

          const elemProps = elem[elemKeys[1] as keyof typeof elem] as Record<
            string,
            any
          >;

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
