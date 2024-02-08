import { render, screen } from "@testing-library/react";
import { PersonalInfosGroup } from "./PersonalInfosGroup";

describe("PersonalInfosGroup Suite", () => {
  test("Testando se o componente está renderizando corretamente", () => {
    render(
      <PersonalInfosGroup data={["atributo especifico"]} title="Título" />
    );

    expect(screen.getByText("atributo especifico")).toBeInTheDocument();
    expect(screen.getByText("Título")).toBeInTheDocument();
  });
});
