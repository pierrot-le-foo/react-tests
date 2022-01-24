import React, { SyntheticEvent } from "react";
import Base from "./Base";
import { TestItemExtraProps } from "./Test";

interface ActionProps {
  eventName: string;
  run(element?: HTMLElement): Promise<boolean>;
  cursor: number;
  position: number;
  moveCursor(): void;
  event: SyntheticEvent;
  element: HTMLElement;
  options?: TestItemExtraProps;
  delay?: number;
}

export default function Action({
  eventName,
  cursor,
  position,
  event,
  element,
  run,
  moveCursor,
  options = {},
  delay = 0,
}: ActionProps) {
  return (
    <Base
      delay={delay}
      cursor={cursor}
      position={position}
      run={run}
      moveCursor={moveCursor}
      element={element}
      type="EVENT"
      options={options}
      info={({ state, target }) => {
        let elemString;

        if (state === "iddle") {
          if ("root" in options) {
            elemString = "exit";
          } else if ("target" in options) {
            elemString = `$('${options.target}')`;
          } else {
            elemString = element.tagName;
          }
        } else {
          if ("root" in options) {
            elemString = "exit";
          } else if ("target" in options) {
            elemString = `<${target?.tagName.toLowerCase()}`;

            const { attributes } = element;

            for (const attr of attributes) {
              elemString += ` ${attr}`;
            }

            elemString += "/>";
          } else {
            elemString = element.tagName;
          }
        }

        return (
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div>{eventName}</div>
            <div>{elemString}</div>
            <div>
              <pre>{JSON.stringify(event)}</pre>
            </div>
          </div>
        );
      }}
    />
  );
}
