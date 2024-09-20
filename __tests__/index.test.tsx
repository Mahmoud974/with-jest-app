/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "@/pages/home/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
  it("renders welcome message and description", () => {
    render(<Home />);
    // Vérifier le titre principal
    const titleElement = screen.getByText(/Welcome to/i);
    expect(titleElement).toBeInTheDocument();

    // Vérifier la description
    const descriptionElement = screen.getByText(/Get started by editing/i);
    expect(descriptionElement).toBeInTheDocument();
  });
  it("tester la documentation", () => {
    render(<Home />);
    const ok = screen.getByText(/Documentation/i).closest("a");
    expect(ok).toHaveAttribute("href", "https://nextjs.org/docs");
  });
  test("render vercel image logog", () => {
    render(<Home />);
    const vercelLogo = screen.getByAltText(/Vercel logo/i);
    expect(vercelLogo).toBeInTheDocument();
    expect(vercelLogo).toHaveAttribute("width", "72");
    expect(vercelLogo).toHaveAttribute("height", "16");
  });
});
