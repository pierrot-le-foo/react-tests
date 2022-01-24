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
  options,
}: HasTextProps) {
  const props: Partial<ResultProps> = {};

  if (text instanceof RegExp) {
    props.toMatch = text;
  } else {
    props.toEqual = text;
  }

  return (
    <Result
      expect={(elem) => elem.innerText}
      {...props}
      cursor={cursor}
      position={position}
      moveCursor={moveCursor}
      element={element}
      options={options}
      assertion={`has text ${text}`}
    />
  );
}
