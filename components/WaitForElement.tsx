import React, { ComponentType, useEffect } from "react";
import { useCallback, useState } from "react";

interface WaitForElementProps {
  element: HTMLElement;
  selector: string;
  children: ComponentType<{ element: HTMLElement }>;
}

export function WaitForElement({
  element,
  selector,
  children: Component,
}: WaitForElementProps) {
  const [retries, setRetries] = useState(0);

  const retry = useCallback(() => setRetries(retries + 1), [retries]);

  const found = element.querySelector(selector) as HTMLElement;

  useEffect(() => {
    if (!found && retries < 25) {
      retry()
    }
  }, [found, retries]);

  if (!found) {
    return <div className="rotate">⧖</div>;
  }

  return <Component element={found} />;
}
