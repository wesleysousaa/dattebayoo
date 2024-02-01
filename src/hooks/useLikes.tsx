import { useContext } from "react";
import { CharacterType } from "../types/CharacterType";
import { LikeContext } from "../context/LikesContext";

export default function useLikes() {
  const { likes, setLikes } = useContext(LikeContext);

  function like(character: CharacterType) {
    if (likes.find((like) => like.id === character.id)) {
      return;
    }
    setLikes([...likes, character]);
  }

  function deslike(id: number) {
    setLikes(likes.filter((like) => like.id !== id));
  }

  function isLiked(id: number) {
    return likes.find((like) => like.id === id);
  }

  return {
    like,
    deslike,
    isLiked,
    likes,
  };
}
