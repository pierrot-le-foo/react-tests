import React, { useEffect, useState } from "react";

export interface ResultProps {
  label: string;
  expect(): any;
  toEqual?: any;
  toMatch?: RegExp;
  cursor: number;
  position: number;
  moveCursor(): void;
}

export function Result({
  label,
  expect,
  toEqual,
  toMatch,
  cursor,
  position,
  moveCursor,
}: ResultProps) {
  const [valid, setValid] = useState<boolean | null>(null);

  useEffect(() => {
    if (cursor === position) {
      if (toMatch) {
        setValid(toMatch.test(expect()));
      } else {
        setValid(expect() === toEqual);
      }
      moveCursor();
    }
  }, [cursor, position]);

  let color = "grey";
  let icon = "_";

  if (typeof valid === "boolean") {
    color = valid ? "green" : "red";
    icon = valid ? "✅" : "❌";
  }

  return (
    <div>
      <div style={{ color }}>
        {icon} {label}
      </div>
      {typeof valid === "boolean" && !valid && (
        <div>
          Was expecting {JSON.stringify(expect())} to equal{" "}
          {JSON.stringify(toEqual)}
        </div>
      )}
    </div>
  );
}
