import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Suite", () => {
  test("Testando se o componente está renderizando corretamente", () => {
    render(<Footer />);

    const text = screen.getByText("© Todos os direitos reservados");
    expect(text).toBeInTheDocument();
  });
});
