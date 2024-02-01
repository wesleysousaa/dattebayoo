"use client";
import { styled } from "styled-components";

export const NotFoundMainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;

  h1 {
    width: fit-content;
    text-align: center;
  }

  a {
    padding: 1rem;
    border: solid 2px #fff;
    border-radius: 10px;
    transition: 0.2s;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;
