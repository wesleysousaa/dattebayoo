"use client";
import {
  AboutSectionStyled,
  DescriptionAboutSivStyled,
  ImageStyledAbout,
  LinkAboutStyled,
} from "../../styles/About";
import { TitleSectionStyled } from "../../styles/Global";
export default function Page() {
  return (
    <main>
      <AboutSectionStyled id="sobre-nos">
        <ImageStyledAbout
          src="image-about.jpg"
          alt="Imagem da sção sobre nós"
        />
        <DescriptionAboutSivStyled>
          <TitleSectionStyled>Sobre nós</TitleSectionStyled>
          <p>
            Bem-vindo ao Dattebayo, sua fonte definitiva para explorar o
            universo de Naruto! Aqui, você terá acesso à nossa seção dinâmica de
            personagens, alimentada pela nossa API exclusiva. A cada reload da
            tela, você será apresentado a uma nova seleção de ninjas,
            diretamente da nossa vasta coleção de dados. Graças à nossa
            integração com a API, podemos oferecer uma experiência única e
            sempre atualizada, permitindo que você mergulhe mais fundo no mundo
            de Naruto com facilidade. Explore perfis detalhados, descubra
            curiosidades e apaixone-se ainda mais pelos seus personagens
            favoritos. Junte-se a nós agora e deixe a API do Dattebayo levá-lo a
            uma jornada através dos lendários ninjas do mundo ninja. Não perca
            tempo, comece sua aventura agora! Dattebayo!
          </p>
          <LinkAboutStyled href="https://api-dattebayo.vercel.app/">
            Acesse a página oficial da API &#10132;
          </LinkAboutStyled>
        </DescriptionAboutSivStyled>
      </AboutSectionStyled>
    </main>
  );
}
