"use client";

import { styled } from "styled-components";
import { ContainerStyled } from "./Global";

export const CustomHomeContainerStyled = styled.main`
  display: flex;
  background-color: black;
  min-height: 700px;
  gap: 1rem;
`;

export const CharacterContainerStyled = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export const CharacterSectionStyled = styled(ContainerStyled)`
  background-image: url("../../public/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
`;
