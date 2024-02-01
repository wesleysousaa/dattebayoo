export type CharacterType = {
  id: number;
  debut: {
    appearsIn: string;
  };
  images: string[];
  jutsu: string[];
  name: string;
  personal: {
    status: string;
    birthdate: string;
    clan: string;
    kekkeiGenkai: string[];
    classification: string[];
    sex: string;
  };
  natureType: string[];
  tools: string[];
};
