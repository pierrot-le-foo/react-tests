import React, { useCallback, useState } from "react";
import Test from "../components/Test";

// A view that display a cursor that increments on each click

function ClickTargetTest() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => setCounter(counter + 1), [counter]);

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <button>other button</button>
          </td>

          <td>
            <button onClick={increment}>{counter}</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

// Testing the view in the UI

export default function TestClickTarget({ autoStart = false }) {
  const button = { target: "td:nth-child(2) button" };

  return (
    <Test
      Component={ClickTargetTest}
      tests={[
        Test.hasText("0", button),
        Test.click(button),
        Test.hasText("1", button),
      ]}
      autoStart={autoStart}
    />
  );
}
