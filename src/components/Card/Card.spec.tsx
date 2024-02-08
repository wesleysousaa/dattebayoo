import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CharacterType } from "../../types/CharacterType";
import Card from "./Card";
import { LikeProvider } from "../../context/LikesContext";
import { BrowserRouter } from "react-router-dom";

describe("Card Suite", () => {
  const fakeCharacter: CharacterType = {
    id: 1,
    name: "Nagato",
    personal: {
      birthdate: "10/10/2010",
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
    render(
      <LikeProvider>
        <BrowserRouter>
          <Card character={fakeCharacter} />
        </BrowserRouter>
      </LikeProvider>
    );
    const charName = screen.getByText("Nagato");
    const gender = screen.getByText("Masculino");
    const clan = screen.getByText("Uzumaki");

    expect(charName).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(clan).toBeInTheDocument();
  });

  test("Testando se o like está funcionando", async () => {
    render(
      <LikeProvider>
        <BrowserRouter>
          <Card character={fakeCharacter} />
        </BrowserRouter>
      </LikeProvider>
    );
    const likeButton = screen.getByTestId("char-button-like-test");
    await user.click(likeButton);
    const likedButton = screen.getByTestId("char-button-like-test");

    expect(likedButton).toHaveStyle({ backgroundColor: "#ff7300" });
  });
});
