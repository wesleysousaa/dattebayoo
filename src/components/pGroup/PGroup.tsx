import { DescriptionStyled } from "../../styles/PGroup";

interface props {
  title: string;
  desc: string;
}

export default function PGroup({ desc, title }: props) {
  return (
    <div>
      <DescriptionStyled data-testid="description-test-id">
        {desc}
      </DescriptionStyled>
      <p data-testid="title-test-id">{title ? title : "Sem informações"}</p>
    </div>
  );
}
