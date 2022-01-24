# Concept

```javascript
// A view that display a cursor that increments on each click

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => setCounter(counter + 1), [counter]);

  return <button onClick={increment}>{counter}</button>;
}

// Testing the view

function TestCounter({ autoStart = false }) {
  return (
    <Test
      Component={Counter}
      tests={[
        // Button text should be 0
        Test.hasText("0"),
        // Click button
        Test.click(),
        // Button text should now have incremented by one
        Test.hasText("1")]}
      autoStart={autoStart}
    />
  );
}

// Testing the view in the UI

function MyTests() {
  return <TestCounter />
}

// Testing the view in CI

import { render, waitFor, screen } from "@testing-library/react";

test("Counter", async () => {
  render(<TestCounter autoStart />);
  await waitFor(() => screen.findAllByTestId('react-tests-done'))
});
```

# API

## hasType

```javascript
<Test Component={() => <span />} tests={[Test.hasType("span")]} />
```

### selector

A HTML element.

```javascript
// With an HTML Element
<Test Component={() => <span />} tests={[Test.hasType("span")]} />
```

## hasText

```javascript
// With an HTML Element
<Test
  Component={() => <h1>Welcome!</h1>}
  tests={[Test.hasText("Welcome!"), Test.hasText(/welcome/i)]}
/>
```

## hasAttributes

## hasProps

## hasChild

```javascript
// With an HTML Element
<Test
  Component={() => <h1>Welcome!</h1>}
  tests={[Test.hasText("Welcome!"), Test.hasText(/welcome/i)]}
/>
```

## trigger

```javascript
// With an HTML Element
<Test
  Component={() => <input />}
  tests={[Test.hasText("Welcome!"), Test.hasText(/welcome/i)]}
/>
```

## click

```javascript
// With an HTML Element
<Test
  Component={() => <input />}
  tests={[Test.click()]}
/>
```

## focus

## blur
