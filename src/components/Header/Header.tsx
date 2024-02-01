import { Link, useLocation } from "react-router-dom";
import {
  HeaderLiStyled,
  HeaderStyled,
  HeaderTitle,
  HeaderTitleSpanStyled,
  HeaderUlStyled,
  ImageHeaderStyled,
} from "../../styles/Header";

export default function Header() {
  const location = useLocation();

  return (
    <header className="container">
      <HeaderStyled>
        <HeaderTitle>
          Datte<HeaderTitleSpanStyled>bayo</HeaderTitleSpanStyled>
        </HeaderTitle>
        <HeaderUlStyled>
          <HeaderLiStyled $isActive={location.pathname === "/" ? true : false}>
            <Link to={"/"}>Início</Link>
          </HeaderLiStyled>
          <HeaderLiStyled
            $isActive={location.pathname === "/favorites" ? true : false}
          >
            <Link to={"/favorites"}>Favoritos</Link>
          </HeaderLiStyled>
          <HeaderLiStyled
            $isActive={location.pathname === "/about" ? true : false}
          >
            <Link to={"/about"}>Sobre</Link>
          </HeaderLiStyled>
          <HeaderLiStyled>
            <a
              href={"https://github.com/wesleysousaa/dattebayo"}
              target="_blank"
              rel="noreferrer"
            >
              <ImageHeaderStyled src="github.png" alt="ir para github" />
            </a>
          </HeaderLiStyled>
        </HeaderUlStyled>
      </HeaderStyled>
    </header>
  );
}
