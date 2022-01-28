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
import { WaitForElement } from "./WaitForElement";

interface TestProps {
  Component: ComponentType;
  props?: Record<string, any>;
  label?: string;
  tests: any[];
  autoStart?: boolean;
}

export interface TestItemProps {
  element: HTMLElement;
  cursor: number;
  position: number;
  moveCursor(): void;
}

export interface TestItemExtraProps {
  target?: string;
  label?: string;
  root?: string;
}

const orientations = ["column", "row", "column-reverse", "row-reverse"];

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

  const finalLabel =
    label || Component.displayName || Component.name || "Testing";

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
    setReady(Boolean(ref.current.firstChild));
    setElement(ref.current.firstChild);
    if (autoStart) {
      console.log("GO");
      setCursor(0);
    }
  }, [ref]);

  const [mounted] = useState(<Component {...props} />);

  useEffect(() => {
    console.log(`%cTesting "${finalLabel}"`, "color: #369; font-weight: bold", {
      autoStart,
    });
  }, []);

  const [orientation, setOrientation] = useState(0);

  const toggleOrientation = useCallback(() => {
    let nextOrientation = orientation + 1;
    if (!orientations[nextOrientation]) {
      nextOrientation = 0;
    }
    setOrientation(nextOrientation);
  }, [orientation]);

  return (
    <div
      style={{
        backgroundColor: "#333",
        // height: '100vh',
      }}
    >
      <style>
        {`
      .rotate {
        animation: rotate 1.5s linear infinite; 
      }

      @keyframes rotate {
        to{ transform: rotate(360deg); }
      }
      `}
      </style>

      <div>
        <button
          onClick={() => setCursor(0)}
          disabled={cursor >= 0 && !done}
          style={{ fontSize: 42 }}
        >
          🚀
        </button>
        <button onClick={toggleOrientation} style={{ fontSize: 34 }}>
          ⤵
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: orientations[orientation] as any,
        }}
      >
        <div ref={ref} style={{ flex: 1, backgroundColor: "white" }}>
          {mounted}
        </div>

        <div style={{ flex: 1 }}>
          {done && (
            <h2 data-testid="react-tests-done" style={{ color: "white" }}>
              Done
            </h2>
          )}

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
  (text: string | RegExp, extraProps?: TestItemExtraProps) =>
  (props: TestItemProps) =>
    <HasText text={text} {...props} options={extraProps} />;

Test.click = (extraProps?: TestItemExtraProps) => (props: TestItemProps) =>
  <Click {...props} options={extraProps} />;

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

function trigger<T extends Element = Element>(
  eventName: string,
  event: SyntheticEvent<T>,
  extraProps?: TestItemExtraProps
) {
  return (props: TestItemProps) => (
    <Trigger<T>
      {...props}
      eventName={eventName}
      event={event}
      options={extraProps}
    />
  );
}

Test.trigger = trigger;
