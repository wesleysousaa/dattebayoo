import { createContext, useState } from "react";
import { CharacterType } from "../types/CharacterType";

type LikesContextType = {
  likes: CharacterType[];
  setLikes: (like: CharacterType[]) => void;
};

export const LikeContext = createContext<LikesContextType>(
  {} as LikesContextType
);

interface LikeProviderProps {
  children: React.ReactNode;
}

export function LikeProvider({ children }: LikeProviderProps) {
  const [likes, setLikes] = useState<CharacterType[]>([]);

  return (
    <LikeContext.Provider value={{ likes, setLikes }}>
      {children}
    </LikeContext.Provider>
  );
}
