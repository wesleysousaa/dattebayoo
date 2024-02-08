import { render, screen } from "@testing-library/react";
import Favorites from "./Favorites";
import { LikeProvider } from "../../context/LikesContext";
import Card from "../../components/Card/Card";
import { CharacterType } from "../../types/CharacterType";
import { BrowserRouter } from "react-router-dom";
import user from "@testing-library/user-event";

describe("Favorites Suite", () => {
  const fakeCharacter: CharacterType = {
    id: 1126,
    name: "Shū (lord)",
    personal: {
      birthdate: "10 de outubro",
      clan: "Uzumaki",
      classification: ["Ninja"],
      kekkeiGenkai: ["Rinnegan"],
      sex: "Masculino",
      status: "Morto",
    },
    debut: { appearsIn: "Episódio 135" },
    images: ["https://image.com"],
    jutsu: ["Chibaku Tensei", "Shinra Tensei"],
    natureType: ["Raiton", "Futton"],
    tools: ["Bijuu"],
  };

  test("Testando se o componente está renderizando corretamente", () => {
    render(<Favorites />, { wrapper: LikeProvider });
    const title = screen.getByText("Personagens Favoritos");
    expect(title).toBeInTheDocument();
  });

  test("Testando se o component está vazio", async () => {
    render(<Favorites />, { wrapper: LikeProvider });
    const title = screen.getByText("Nenhum personagem favoritado");
    expect(title).toBeInTheDocument();
  });

  test("Testando se o component está com personagens", async () => {
    render(
      <BrowserRouter>
        <LikeProvider>
          <>
            <Card character={fakeCharacter} />
            <Favorites />
          </>
        </LikeProvider>
      </BrowserRouter>
    );
    const addFav = screen.getByTestId("char-button-like-test");

    await user.click(addFav);
    const title = screen.queryByText("Nenhum personagem favoritado");
    expect(title).not.toBeInTheDocument();
  });
});
