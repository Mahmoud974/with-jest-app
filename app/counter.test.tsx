/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import About from "./counter";

describe("Tester ok ", () => {
  it("App Router: Works with Client Components (React State)", () => {
    render(<About />);
    const text = screen.getByText(/About Our Company/i);
    expect(text).toBeInTheDocument();
  });
  it("App Router: Works with Client Components (React State)", () => {
    render(<About />);
    const text = screen.getByText(
      /We are dedicated to providing the best service./i
    );
    expect(text).toBeInTheDocument();
  });
  it("Le lien est ça ", () => {
    render(<About />);
    const text = screen.getByText(/Go back to Home/i).closest("a");
    expect(text).toBeInTheDocument();
    expect(text).toHaveAttribute("href", "/");
  });
  it("the tab", () => {
    render(<About />);
    const make = [10, 30, 40];
    const tab = screen
    expect(make).toContain(10);
    expect(make).toContain(10);
  });
});
