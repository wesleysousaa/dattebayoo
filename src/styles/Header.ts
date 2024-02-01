"use client";
import { styled } from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  @media (max-width: 420px) {
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderTitleSpanStyled = styled.span`
  text-decoration: underline solid #ff7300;
`;

export const HeaderUlStyled = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const HeaderLiStyled = styled.li<{ $isActive?: boolean }>`
  list-style: none;
  font-weight: bold;

  a {
    color: ${(props) => (props.$isActive ? "#ff7300" : "")};
  }
`;

export const HeaderTitle = styled.h2`
  width: fit-content;
`;

export const ImageHeaderStyled = styled.img`
  width: 20px;
`;
