"use client";
import useData from "../../hooks/useData";
import { useEffect, useState } from "react";
import { CharacterType } from "../../types/CharacterType";
import PGroup from "../../components/pGroup/PGroup";
import {
  BtnBlackStyled,
  CharacterBodyStyled,
  CharacterPageStyled,
  GalleryStyled,
  NameCharacterStyled,
  PersonalInfosGroupStyled,
  PersonalInfosStyled,
} from "../../styles/Character";
import { Link, useParams } from "react-router-dom";
import { PersonalInfosGroup } from "../../components/PersonalInfosGroup/PersonalInfosGroup";

export default function Character() {
  const { id } = useParams();

  const { getOneById } = useData();
  const [data, setData] = useState<CharacterType>({} as CharacterType);

  useEffect(() => {
    async function fetch() {
      const response = await getOneById(Number(id));
      const data = await response.json();
      setData(data);
    }
    fetch();
  }, []);

  return (
    <CharacterPageStyled>
      {data && (
        <>
          <NameCharacterStyled data-testid="name-char-test">
            {data.name}
          </NameCharacterStyled>
          <GalleryStyled>
            {data &&
              data.images?.map((image) => (
                <img key={image} src={image} alt={`imagem de ${data.name}`} />
              ))}
          </GalleryStyled>
          <CharacterBodyStyled>
            <PersonalInfosStyled>
              <PGroup title={data?.debut?.appearsIn} desc="Aparece em" />
              <PGroup title={data?.personal?.clan} desc="Clã" />
              <PGroup title={data?.personal?.birthdate} desc="Aniversário" />
            </PersonalInfosStyled>

            <hr />
            {data && (
              <PersonalInfosGroupStyled>
                <PersonalInfosGroup
                  title="Kekkei Genkai"
                  data={data?.personal?.kekkeiGenkai}
                />

                <PersonalInfosGroup
                  title="Clasificação"
                  data={data?.personal?.classification}
                />
                <PersonalInfosGroup
                  title="Tipos naturais"
                  data={data?.natureType}
                />
                <PersonalInfosGroup title="Ferramentas" data={data?.tools} />
              </PersonalInfosGroupStyled>
            )}
          </CharacterBodyStyled>
          <Link to={`/`}>
            <BtnBlackStyled> Para o início </BtnBlackStyled>
          </Link>
        </>
      )}
    </CharacterPageStyled>
  );
}
