// hooks/useMediaQuery.ts
import { useState, useEffect } from "react";

export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener("change", listener);
    listener(); // Initialize

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
