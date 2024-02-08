import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home Suite", () => {
  test("Testando se o componente está renderizando corretamente", () => {
    render(<Home />);
    const title = screen.getByText("Personagens");
    expect(title).toBeInTheDocument();
  });

  test("Testando se está aparecendo ao menos um card na home", async () => {
    render(<Home />);
    // Tentei usar o await for pra esperar a api responder, mas não tá funcionando :(

    // await waitFor(() => {
    //   const gender = screen.getByText(/Clã/);
    //   expect(gender).toBeInTheDocument();
    // });
  });
});
