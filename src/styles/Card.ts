"use client";

import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
  min-width: 300px;
  max-width: 400px;
  border-radius: 1rem;
  background-color: #272727;
  max-height: 350px;
  padding: 0;
  flex: 1;
`;

export const CardBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

export const CardImageStyled = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 40%;
  border-radius: 1rem 1rem 0 0;
`;

export const ButtonStyled = styled.button<{ isLike?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: solid 1px #fff;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  justify-content: center;
  background-color: ${(props) => (props.isLike ? "#ff7300" : "transparent")};
  &:hover {
    scale: 1.005;
    transition: 0.2s;
    background-color: #fff;
    color: #272727;
  }
`;

export const CardBodyDescriptionStyled = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CardButtonGroupStyled = styled.div`
  display: flex;
  margin: 1rem;
  gap: 1rem;

  a {
    width: 50%;
  }
`;
