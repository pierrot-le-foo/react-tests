import React, { useEffect, useState } from "react";

interface WaitProps {
  milliseconds: number
  cursor: number
  position: number
  moveCursor(): void
}

export function Wait({ milliseconds, cursor, position, moveCursor }: WaitProps) {
  const [waited, setWaited] = useState<null | boolean>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (cursor === position) {
      console.log(`%cWAIT`, 'color: orange', milliseconds);
      setStarted(true);
      setTimeout(() => {
        console.log(`%cWAIT`, 'color: green', milliseconds);
        setWaited(true);
        moveCursor();
      }, milliseconds);
    }
  }, [cursor, position]);

  let icon = '_';

  if (typeof waited === 'boolean') {
    icon = waited ? '✅' : '❌';
  } else if (started) {
    icon = '...';
  }

  return (
    <div>
      {icon} WAIT {milliseconds}
    </div>
  );
}