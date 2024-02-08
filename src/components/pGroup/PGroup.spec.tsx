import { render, screen } from "@testing-library/react";
import PGroup from "./PGroup";

describe("PGroup Suite", () => {
  test("Testando se o componente está renderizando corretamente", () => {
    render(<PGroup desc="Descrição" title="Título" />);

    const descriptionValue = screen.getByTestId("description-test-id");
    const titleValue = screen.getByTestId("title-test-id");

    expect(descriptionValue).toBeInTheDocument();
    expect(titleValue).toBeInTheDocument();
  });

  test("Testando se o componente está renderizando com os valores passados", async () => {
    render(<PGroup desc="Descrição" title="Título" />);

    const descriptionElement = screen.getByText("Descrição");
    const titleElement = screen.getByText("Título");

    expect(descriptionElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});
