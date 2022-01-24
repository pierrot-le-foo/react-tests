import React, { useEffect, useState } from "react";
import { printElement } from "../helpers/printElement";
import Base from "./Base";
import { TestItemExtraProps, TestItemProps } from "./Test";

export interface ClickProps extends TestItemProps {
  options?: TestItemExtraProps;
}

export function Click({
  options = {},
  element,
  cursor,
  position,
  moveCursor,
}: ClickProps) {
  return (
    <Base
      cursor={cursor}
      position={position}
      moveCursor={moveCursor}
      element={element}
      type="CLICK"
      options={options}
      delay={350}
      info={() => <div>
        <div>{printElement(options.target || element)}</div>
      </div>}
      run={async (elem) => {
        if (elem && typeof elem.scrollIntoView === "function") {
          elem.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        }

        if (elem) {
          (elem as HTMLElement).click();
          return true;
        }

        return false;
      }}
    />
  );
}
