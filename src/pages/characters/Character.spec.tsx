import { render, screen } from "@testing-library/react";
import Character from "./Characters";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("Characters Suite", () => {
  test("Testando se o componente está renderizando corretamente", () => {
    render(<Character />, { wrapper: BrowserRouter });

    const title = screen.getByTestId("name-char-test");
    const appearsIn = screen.getByText("Aparece em");
    const clan = screen.getByText("Clã");
    const birthDate = screen.getByText("Aniversário");
    const kekkeiGenkai = screen.getByText("Kekkei Genkai");
    const classification = screen.getByText("Clasificação");
    const naturalTypes = screen.getByText("Tipos naturais");
    const tools = screen.getByText("Ferramentas");

    const backLink = screen.getByText("Para o início");

    expect(title).toBeInTheDocument();
    expect(appearsIn).toBeInTheDocument();
    expect(clan).toBeInTheDocument();
    expect(birthDate).toBeInTheDocument();
    expect(kekkeiGenkai).toBeInTheDocument();
    expect(classification).toBeInTheDocument();
    expect(naturalTypes).toBeInTheDocument();
    expect(tools).toBeInTheDocument();
    expect(backLink).toBeInTheDocument();
  });

  test("Testando consigo voltar a partir do botão de voltar para o início", async () => {
    render(<Character />, { wrapper: BrowserRouter });

    const backLink = screen.getByText("Para o início");
    await user.click(backLink);

    expect(window.location.pathname).toBe("/");
  });
});
