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
  info(props: { state: State; target?: HTMLElement }): ReactNode;
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
}: BaseProps) {
  const [state, setState] = useState<State>("iddle");
  const [target, setTarget] = useState<HTMLElement>();

  console.log('Base', {options})

  useEffect(() => {
    if (cursor === position && !target) {
      setState("running");

      let elem: HTMLElement;

      if ("target" in options) {
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
    console.log("!!!!!!!!!!!", state, target);
    if (state === "running" && target) {
      run(target)
        .then((res) => {
          if (res) {
            setState("ok");
            console.log("OK");
            moveCursor();
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
      <div>{info({ state, target })}</div>
    </div>
  );
}
