import { Result, ResultProps } from "./Result";
import React from "react";
import { TestItemExtraProps, TestItemProps } from "./Test";

interface HasTextProps extends TestItemProps {
  text: string | RegExp;
  options?: TestItemExtraProps;
}

export function HasText({
  text,
  element,
  cursor,
  position,
  moveCursor,
}: HasTextProps) {
  const props: Partial<ResultProps> = {};

  if (text instanceof RegExp) {
    props.toMatch = text;
  } else {
    props.toEqual = text;
  }

  return (
    <Result
      label={`HAS TEXT ${text}`}
      expect={() => element.innerText}
      {...props}
      cursor={cursor}
      position={position}
      moveCursor={moveCursor}
      element={element}
    />
  );
}
