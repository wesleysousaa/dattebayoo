"use client";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}



a {
  color: inherit;
  text-decoration: none;
}


@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}

`;

export const ContainerStyled = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;

export const TitleSectionStyled = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin: 2rem 0;
  color: #ff7300;
`;
