import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import user from "@testing-library/user-event";

describe("Header Suite", () => {
  const links = ["home-link", "fav-link", "about-link"];
  test("Testando se os links do header estão aparecendo na tela", () => {
    render(<Header />, { wrapper: BrowserRouter });

    const inicio = screen.getByTestId(links[0]);
    const fav = screen.getByTestId(links[1]);
    const about = screen.getByTestId(links[2]);

    expect(inicio).toBeInTheDocument();
    expect(fav).toBeInTheDocument();
    expect(about).toBeInTheDocument();
  });

  test("Testando se home redireciona corretamente", async () => {
    render(<Header />, { wrapper: BrowserRouter });

    const inicio = screen.getByTestId(links[0]);

    await user.click(inicio);

    expect(inicio).toHaveAttribute("href", "/");
    expect(window.location.pathname).toBe("/");
  });

  test("Testando se favoritos redireciona corretamente", async () => {
    render(<Header />, { wrapper: BrowserRouter });

    const fav = screen.getByTestId(links[1]);

    await user.click(fav);

    expect(fav).toHaveAttribute("href", "/favorites");
    expect(window.location.pathname).toBe("/favorites");
  });

  test("Testando se sobre nós redireciona corretamente", async () => {
    render(<Header />, { wrapper: BrowserRouter });

    const about = screen.getByTestId(links[2]);

    await user.click(about);

    expect(about).toHaveAttribute("href", "/about");
    expect(window.location.pathname).toBe("/about");
  });
});
