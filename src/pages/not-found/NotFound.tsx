import { Link } from "react-router-dom";
import { TitleSectionStyled } from "../../styles/Global";
import {
  NotFoundMainStyled,
  NotFoundSectionStyled,
} from "../../styles/NotFound";

export default function NotFound() {
  return (
    <NotFoundMainStyled>
      {/* <img src="not-found.jpg" alt="Página não encontrada" /> */}
      <NotFoundSectionStyled>
        <TitleSectionStyled>404 - Página não encontrada</TitleSectionStyled>
        <Link to="/">Ir para o início</Link>
      </NotFoundSectionStyled>
    </NotFoundMainStyled>
  );
}
