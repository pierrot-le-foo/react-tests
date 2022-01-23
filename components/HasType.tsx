import { Result } from "./Result";
import React from "react";

export function HasType({ type, element, cursor, position, moveCursor }) {
  return (
    <Result
      label={`HAS TYPE ${type}`}
      expect={() => element.tagName.toLowerCase()}
      toEqual={type}
      cursor={cursor}
      position={position}
      moveCursor={moveCursor}
    />
  );
}
