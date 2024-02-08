import { render, screen } from "@testing-library/react";
import About from "./About";
describe("About Suite", () => {
  test("Testando se o componente está renderizando corretamente", () => {
    render(<About />);
    const title = screen.getByText("Sobre nós");
    const description = screen.getByTestId("description-about-test");
    const link = screen.getByTestId("link-about-test");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
