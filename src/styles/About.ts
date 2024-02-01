"use client";

import { styled } from "styled-components";
import { ContainerStyled } from "./Global";

export const AboutSectionStyled = styled(ContainerStyled)`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const ImageStyledAbout = styled.img`
  max-width: 500px;
`;

export const DescriptionAboutSivStyled = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

export const LinkAboutStyled = styled.a`
  margin-top: 1rem;
  color: #ff7300;
  text-decoration: underline;
`;
