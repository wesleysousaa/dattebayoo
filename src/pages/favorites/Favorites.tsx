import React from "react";
import {
  CharacterContainerStyled,
  CharacterSectionStyled,
  CustomHomeContainerStyled,
} from "../../styles/Home";
import { TitleSectionStyled } from "../../styles/Global";
import useLikes from "../../hooks/useLikes";
import Card from "../../components/Card/Card";
import { CharacterType } from "../../types/CharacterType";

export default function Favorites() {
  const { likes } = useLikes();

  return (
    <CustomHomeContainerStyled suppressHydrationWarning>
      <CharacterSectionStyled id="personagens">
        <TitleSectionStyled>Personagens Favoritos</TitleSectionStyled>
        <CharacterContainerStyled>
          {likes && likes.length > 0 ? (
            likes.map((item) => (
              <Card key={item.id} character={item as CharacterType} />
            ))
          ) : (
            <h1>Nenhum personagem favoritado</h1>
          )}
        </CharacterContainerStyled>
      </CharacterSectionStyled>
    </CustomHomeContainerStyled>
  );
}
