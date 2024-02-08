import { useEffect, useState } from "react";
import {
  CharacterContainerStyled,
  CharacterSectionStyled,
  CustomHomeContainerStyled,
} from "../../styles/Home";
import { TitleSectionStyled } from "../../styles/Global";
import useData from "../../hooks/useData";
import Card from "../../components/Card/Card";
import { CharacterType } from "../../types/CharacterType";

type CharType = {
  id: number;
  name: string;
  images: string[];
  personal: {
    sex: string;
    clan: string;
  };
};

type ResponseType = {
  characters: CharType[];
  current_page: number;
  total_pages: number;
  pageSize: number;
  total: number;
};

export default function Home() {
  const { getAll } = useData();
  const [data, setData] = useState<CharType[]>([]);

  useEffect(() => {
    async function fetch() {
      const randomPage = Math.floor(Math.random() * (1431 / 20));
      const response = await getAll(randomPage);
      const data = (await response.json()) as ResponseType;
      setData(data.characters);
    }
    fetch();
  }, []);

  return (
    <CustomHomeContainerStyled suppressHydrationWarning>
      <CharacterSectionStyled id="personagens">
        <TitleSectionStyled>Personagens</TitleSectionStyled>
        <CharacterContainerStyled>
          {data.map((item) => (
            <Card key={item.id} character={item as CharacterType} />
          ))}
        </CharacterContainerStyled>
      </CharacterSectionStyled>
    </CustomHomeContainerStyled>
  );
}
