"use client";
import { styled } from "styled-components";

export const CharacterPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 1440px;
  margin: 0 auto;
`;

export const CharacterBodyStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

export const PersonalInfosGroupStyled = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 800px;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TitlePersonalInfosGroupStyled = styled.h3`
  color: #ff7300;
`;

export const ListPersonalInfosGroupStyled = styled.ul`
  list-style: none;
`;

export const PersonalInfosStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const GalleryStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const NameCharacterStyled = styled.h1`
  color: #ff7300;
`;

export const BtnBlackStyled = styled.button`
  color: #ff7300;
  border: solid 1px #ff7300;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: large;
  transition: 0.3s;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #ff7300;
    color: white;
  }
`;
