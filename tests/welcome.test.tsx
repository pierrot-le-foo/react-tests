import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import TestWelcome from "../examples/events";

test("Welcome", async () => {
  render(<TestWelcome autoStart />);
  // await new Promise(resolve => setTimeout(resolve, 2000))
  await waitFor(() => screen.findAllByTestId("react-tests-done"));
});
