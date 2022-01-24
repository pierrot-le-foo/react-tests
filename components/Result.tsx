import React from "react";
import { printElement } from "../helpers/printElement";

import Base from "./Base";
import { TestItemExtraProps, TestItemProps } from "./Test";

export interface ResultProps extends TestItemProps {
  expect(elem: HTMLElement): any;
  toEqual?: any;
  toMatch?: RegExp;
  options?: TestItemExtraProps;
  assertion: string;
}

export function Result({
  expect,
  toEqual,
  toMatch,
  cursor,
  position,
  moveCursor,
  element,
  options = {},
  assertion,
}: ResultProps) {
  return (
    <Base
      cursor={cursor}
      element={element}
      position={position}
      moveCursor={moveCursor}
      options={options}
      type="ASSERT"
      info={() => (
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <div>{printElement(options.target || element)}</div>
          <div>{assertion}</div>
        </div>
      )}
      run={async (elem) => {
        if (typeof toEqual !== "undefined" && elem) {
          return expect(elem) === toEqual;
        }

        if (toMatch instanceof RegExp && elem) {
          return toMatch.test(expect(elem));
        }

        return false;
      }}
    />
  );
}
