import React, { useCallback, useState } from "react";
import Test from "../components/Test";

// A view that display a cursor that increments on each click

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => setCounter(counter + 1), [counter]);

  return <button onClick={increment}>{counter}</button>;
}

// Testing the view in the UI

export default function TestCounter({ autoStart = false }) {
  return (
    <Test
      Component={Counter}
      tests={[Test.hasText("0"), Test.click(), Test.hasText("1")]}
      autoStart={autoStart}
    />
  );
}
