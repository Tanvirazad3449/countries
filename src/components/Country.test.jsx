import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Country from "./Country"; // Adjust path if needed

describe("Country Component", () => {
  test("renders country name and flag", () => {
    render(<Country name="Finland" flag="🇫🇮" />);

    expect(screen.getByText("Finland 🇫🇮")).toBeInTheDocument();
  });

  test("always renders a flag, even if none is provided", () => {
    render(<Country name="Unknown Country" />);
    const countryText = screen.getByText(/Unknown Country/i);
    expect(countryText).toBeInTheDocument();
    expect(countryText.textContent).toMatch(/🏳️/); // Checks if the default flag is present
  });
});
