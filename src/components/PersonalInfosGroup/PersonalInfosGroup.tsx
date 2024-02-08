import {
  ListPersonalInfosGroupStyled,
  TitlePersonalInfosGroupStyled,
} from "../../styles/Character";

interface PersonalInfosGroupProps {
  data: string[];
  title: string;
}

export function PersonalInfosGroup({ data, title }: PersonalInfosGroupProps) {
  return (
    <div>
      {
        <>
          <TitlePersonalInfosGroupStyled>{title}</TitlePersonalInfosGroupStyled>
          <ListPersonalInfosGroupStyled>
            {Array.isArray(data) ? (
              data?.map((item) => <li key={item}>{item}</li>)
            ) : (
              <h3>Nenhuma informação</h3>
            )}
          </ListPersonalInfosGroupStyled>
        </>
      }
    </div>
  );
}
