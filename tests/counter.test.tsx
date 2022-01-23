import TestCounter from "../examples/counter";
import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Counter", async () => {
  render(<TestCounter autoStart />);
  await waitFor(() => screen.findAllByTestId("react-tests-done"));
});
