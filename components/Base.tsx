import React, { ReactNode, useEffect, useState } from "react";
import { TestItemExtraProps } from "./Test";

type State = "iddle" | "running" | "ok" | "failed";

interface BaseProps {
  run(element?: HTMLElement): Promise<boolean>;
  cursor: number;
  position: number;
  moveCursor(): void;
  element: HTMLElement;
  options?: TestItemExtraProps;
  type: string;
  info?(props: { state: State; target?: HTMLElement }): ReactNode;
  delay?: number
}

export default function Base({
  cursor,
  position,
  options = {},
  element,
  run,
  moveCursor,
  type,
  info,
  delay
}: BaseProps) {
  const [state, setState] = useState<State>("iddle");
  const [target, setTarget] = useState<HTMLElement>();

  useEffect(() => {
    if (cursor === position && !target) {
      setState("running");

      let elem: HTMLElement | null = null;

      if ("root" in options) {
        const root = window.document.querySelector(options.root as string) as HTMLHtmlElement

        if (root) {
          if ("target" in options) {
            elem = root.querySelector(options.target as string) as HTMLElement;
          } else {
            elem = root;
          }
        }
      } else if ("target" in options) {
        elem = element.querySelector(options.target as string) as HTMLElement;
      } else {
        elem = element;
      }

      if (elem) {
        setTarget(elem);
      }
    }
  }, [cursor, position, options, element]);

  useEffect(() => {
    if (state === "running" && target) {
      run(target)
        .then((res) => {
          if (res) {
            setState("ok");

            if (delay) {
              setTimeout(moveCursor, delay)
            } else {
              moveCursor();
            }
          } else {
            setState("failed");
          }
        })
        .catch((error) => {
          setState("failed");
        });
    }
  }, [target, state]);

  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <div>
        {state === "running" && <div className="rotate">⧖</div>}
        {state === "ok" && (
          <div style={{ fontWeight: "bold", color: "green" }}>✔</div>
        )}
        {state === "failed" && (
          <div style={{ fontWeight: "bold", color: "red" }}>✖</div>
        )}
      </div>
      <div>{type}</div>
      <div>{info && info({ state, target })}</div>
    </div>
  );
}
