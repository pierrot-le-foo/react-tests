import React, {
  ComponentType,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Click } from "./Click";
import { HasText } from "./HasText";
import { HasType } from "./HasType";
import { Trigger } from "./Trigger";
import { Wait } from "./Wait";

interface TestProps {
  Component: ComponentType;
  props?: Record<string, any>;
  label?: string;
  tests: any[];
  autoStart?: boolean;
}

export default function Test({
  tests,
  Component,
  props = {},
  label = "",
  autoStart = false,
}: TestProps) {
  const [ready, setReady] = useState(false);
  const [element, setElement] = useState();
  const [cursor, setCursor] = useState(-1);
  const [done, setDone] = useState(false);

  const moveCursor = useCallback(() => {
    if (cursor === 0) {
      console.log("Starting tests");
    }

    const nextCursor = cursor + 1;

    const nextTest = tests[nextCursor];

    if (nextTest) {
      setCursor(nextCursor);
      console.log(
        "%cMoving cursor",
        "color: grey; font-weight: bold",
        cursor,
        nextCursor,
        nextTest
      );
    } else {
      console.log("TEST DONE");
      setDone(true);
    }
  }, [cursor]);

  const ref = useRef<any>();

  const refresh = () => setElement(ref.current.firstChild);

  useEffect(() => {
    console.log(1);
    setReady(Boolean(ref.current.firstChild));
    setElement(ref.current.firstChild);
    if (autoStart) {
      setCursor(0);
    }
  }, [ref]);

  const [mounted] = useState(<Component {...props} />);

  useEffect(() => {
    console.log(`%cTesting "${label}"`, "color: #369; font-weight: bold");
  }, []);

  console.log({ ref });

  return (
    <div
      style={{
        backgroundColor: "#333",
        // height: '100vh',
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div ref={ref} style={{ flex: 1, backgroundColor: "white" }}>
          {mounted}
        </div>

        <div>
          <button
            onClick={() => setCursor(0)}
            style={{ width: "100%", fontSize: 28 }}
            disabled={cursor >= 0 && !done}
          >
            Start
          </button>

          {done && <h2 data-testid="react-tests-done">Done</h2>}

          <ul
            style={{
              overflow: "auto",
              listStyleType: "none",
              padding: 0,
            }}
          >
            {ready &&
              Boolean(element) &&
              tests.map((TestItem, testIndex) => (
                <li
                  key={testIndex}
                  style={{
                    color: "#eee",
                    padding: "16px 8px",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <TestItem
                    element={element}
                    refresh={refresh}
                    cursor={cursor}
                    position={testIndex}
                    moveCursor={moveCursor}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Test.hasType =
  (type: string) =>
  ({
    element,
    cursor,
    position,
    moveCursor,
  }: {
    element: HTMLElement;
    cursor: number;
    position: number;
    moveCursor(): void;
  }) =>
    (
      <HasType
        type={type}
        element={element}
        cursor={cursor}
        position={position}
        moveCursor={moveCursor}
      />
    );

Test.hasText =
  (text: string | RegExp) =>
  ({
    element,
    cursor,
    position,
    moveCursor,
  }: {
    element: HTMLElement;
    cursor: number;
    position: number;
    moveCursor(): void;
  }) =>
    (
      <HasText
        text={text}
        element={element}
        cursor={cursor}
        position={position}
        moveCursor={moveCursor}
      />
    );

Test.click =
  (
    selector = "",
    { parent = "", label = "" } = {
      parent: "",
      label: "",
    }
  ) =>
  ({
    element,
    cursor,
    position,
    moveCursor,
  }: {
    element: HTMLElement;
    cursor: number;
    position: number;
    moveCursor(): void;
  }) =>
    (
      <Click
        selector={selector}
        element={element}
        cursor={cursor}
        position={position}
        moveCursor={moveCursor}
        parent={parent}
        label={label}
      />
    );

Test.wait =
  (milliseconds: number) =>
  ({
    cursor,
    position,
    moveCursor,
  }: {
    cursor: number;
    position: number;
    moveCursor(): void;
  }) =>
    (
      <Wait
        milliseconds={milliseconds}
        cursor={cursor}
        position={position}
        moveCursor={moveCursor}
      />
    );

Test.trigger =
  (
    eventName: string,
    event: SyntheticEvent,
    selector?: string,
    { parent = "", label = "" } = { parent: "", label: "" }
  ) =>
  ({
    element,
    cursor,
    position,
    moveCursor,
  }: {
    element: HTMLElement;
    cursor: number;
    position: number;
    moveCursor(): void;
  }) =>
    (
      <Trigger
        event={event}
        selector={selector}
        element={element}
        cursor={cursor}
        position={position}
        moveCursor={moveCursor}
        eventName={eventName}
        parent={parent}
        label={label}
      />
    );

Test.select = (selector = "") => {
  const select = {
    hasText(text = "") {
      return ({
        element,
        cursor,
        position,
        moveCursor,
      }: {
        element: HTMLElement;
        cursor: number;
        position: number;
        moveCursor(): void;
      }) => {
        const elem = element.querySelector(selector) as HTMLElement;

        if (!elem) {
          return <div>Not found {selector}</div>;
        }

        return (
          <HasText
            text={text}
            element={elem}
            cursor={cursor}
            position={position}
            moveCursor={moveCursor}
          />
        );
      };
    },

    trigger(eventName: string, event: SyntheticEvent) {
      return ({
        element,
        cursor,
        position,
        moveCursor,
        label = "",
      }: {
        element: HTMLElement;
        cursor: number;
        position: number;
        moveCursor(): void;
        label?: string;
      }) => {
        const elem = element.querySelector(selector) as HTMLElement;

        if (!elem) {
          return <div>Not found {selector}</div>;
        }

        return (
          <Trigger
            eventName={eventName}
            event={event}
            element={elem}
            cursor={cursor}
            position={position}
            moveCursor={moveCursor}
            label="label"
          />
        );
      };
    },
  };

  return select;
};
