import { useEffect, useState } from "react";

export const useMediaQuery = (media: string) => {
  const [isMatch, setIsMatch] = useState(window.matchMedia(media).matches);

  const sizeChangeHandler = (mediaQuery: MediaQueryListEvent) => {
    if (mediaQuery) setIsMatch(mediaQuery.matches);
  };

  useEffect(() => {
    const matches = window.matchMedia(media);
    matches.addEventListener("change", sizeChangeHandler);
    return () => {
      matches.removeEventListener("change", sizeChangeHandler);
    };
  }, []);

  return isMatch;
};
