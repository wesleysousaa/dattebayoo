import { Link } from "react-router-dom";
import { TitleSectionStyled } from "../../styles/Global";
import {
  NotFoundMainStyled,
  NotFoundSectionStyled,
} from "../../styles/NotFound";

export default function NotFound() {
  return (
    <NotFoundMainStyled>
      <NotFoundSectionStyled>
        <TitleSectionStyled>404 - Página não encontrada</TitleSectionStyled>
        <Link to="/" data-testid="back-to-home-not-found">
          Ir para o início
        </Link>
      </NotFoundSectionStyled>
    </NotFoundMainStyled>
  );
}
