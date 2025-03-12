import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "./App"; // Adjust path if needed

describe("Country Component", () => {
  test("app renders and shows h1", () => {
    render(<App/>);

    expect(screen.getByText("Countries")).toBeInTheDocument();
  });
});
