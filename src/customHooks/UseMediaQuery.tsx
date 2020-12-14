import { useEffect, useState } from 'react';

const UseMediaQuery = (query: string) => {
  const mediaMatch = matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);
  const mediaHandler = (e: MediaQueryListEvent) => setMatches(e.matches);

  useEffect(() => {
    mediaMatch.addEventListener('change', mediaHandler);
    return () => mediaMatch.removeEventListener('change', mediaHandler);
  });

  return matches;
};

export default UseMediaQuery;
