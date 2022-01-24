import { Result } from "./Result";
import React from "react";

interface HasTypeProps {
  type: string
  element: HTMLElement
  cursor: number
  position: number
  moveCursor(): void
}

export function HasType({ type, element, cursor, position, moveCursor }: HasTypeProps) {
  return (
    <Result
      assertion={`has type ${type}`}
      expect={() => element.tagName.toLowerCase()}
      toEqual={type}
      cursor={cursor}
      position={position}
      moveCursor={moveCursor}
      element={element}
    />
  );
}
