import { DescriptionStyled } from "../../styles/PGroup";

interface props {
  title: string;
  desc: string;
}

export default function PGroup({ desc, title }: props) {
  return (
    <div>
      <DescriptionStyled>{desc}</DescriptionStyled>
      <p>{title ? title : "Sem informações"}</p>
    </div>
  );
}
