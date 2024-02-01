import PGroup from "../pGroup/PGroup";
import {
  ButtonStyled,
  CardBodyDescriptionStyled,
  CardBodyStyled,
  CardButtonGroupStyled,
  CardImageStyled,
  CardStyled,
} from "../../styles/Card";
import useLikes from "../../hooks/useLikes";
import { CharacterType } from "../../types/CharacterType";
import { Link } from "react-router-dom";

interface cardProps {
  character: CharacterType;
}

export default function Card({ character }: cardProps) {
  const { like, deslike, isLiked } = useLikes();
  return (
    <CardStyled>
      <CardImageStyled
        src={character.images[0]}
        alt={`imagem de ${character.personal}`}
      />
      <CardBodyStyled>
        <h3>{character.name}</h3>
        <CardBodyDescriptionStyled>
          <PGroup title={character.personal.sex} desc="Gênero" />
          <PGroup title={character.personal.clan} desc="Clã" />
        </CardBodyDescriptionStyled>
      </CardBodyStyled>
      <CardButtonGroupStyled>
        <ButtonStyled
          isLike={!!isLiked(character.id)}
          onClick={() =>
            !!isLiked(character.id) ? deslike(character.id) : like(character)
          }
        >
          ❤ Gostei
        </ButtonStyled>
        <Link to={`/characters/${character.id}`}>
          <ButtonStyled>Ver Mais</ButtonStyled>
        </Link>
      </CardButtonGroupStyled>
    </CardStyled>
  );
}
