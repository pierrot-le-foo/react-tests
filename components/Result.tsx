import React from "react";

import Base from "./Base";
import { TestItemProps } from "./Test";

export interface ResultProps extends TestItemProps {
  label: string;
  expect(): any;
  toEqual?: any;
  toMatch?: RegExp;
}

export function Result({
  label,
  expect,
  toEqual,
  toMatch,
  cursor,
  position,
  moveCursor,
  element,
}: ResultProps) {
  return (
    <Base
      cursor={cursor}
      element={element}
      position={position}
      moveCursor={moveCursor}
      type="ASSERT"
      info={() => <div />}
      run={async () => true}
    />
  );
}
