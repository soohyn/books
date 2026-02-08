import { useEffect, useState } from "react";

const LIKE_KEY = "like";

const getStorageLike = () => {
  const storageData: string = localStorage.getItem(LIKE_KEY) ?? "[]";

  return JSON.parse(storageData);
};

export const useLikeStorage = () => {
  const [likes, setLikes] = useState<string[]>(getStorageLike);

  const setStorageLike = (like: string[]) => {
    localStorage.setItem(LIKE_KEY, JSON.stringify(Array.from(like)));
  };

  const toggleLike = (newLike: string) => {
    setLikes((prev) => {
      if (prev.includes(newLike))
        return prev.filter((item) => item !== newLike);
      else return [...prev, newLike];
    });
  };

  useEffect(() => {
    setStorageLike(likes);
  }, [likes]);

  return {
    likes,
    setLikes,
    toggleLike,
    setStorageLike,
  };
};
