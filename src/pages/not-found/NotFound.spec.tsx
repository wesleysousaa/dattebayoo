import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { BrowserRouter } from "react-router-dom";
import user from "@testing-library/user-event";
describe("NotFound Suite", () => {
  test("Testando se o componente está renderizando corretamente", () => {
    render(<NotFound />, { wrapper: BrowserRouter });
    const title = screen.getByText("404 - Página não encontrada");
    expect(title).toBeInTheDocument();
  });

  test("Testando se está resdirecionando para o início", async () => {
    render(<NotFound />, { wrapper: BrowserRouter });
    const linkHome = screen.getByTestId("back-to-home-not-found");
    await user.click(linkHome);
    expect(window.location.pathname).toBe("/");
  });
});
