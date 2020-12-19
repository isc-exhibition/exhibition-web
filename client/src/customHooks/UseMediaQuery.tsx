import { useEffect, useState } from 'react';
import isUserBrowserSafari from '../utils/DetectBrowser';

const UseMediaQuery = (query: string) => {
  const mediaMatch = matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  const mediaHandler = (e: MediaQueryListEvent) => setMatches(e.matches);

  const addBrowserResizeListener = () => {
    if (isUserBrowserSafari) {
      mediaMatch.addListener(mediaHandler);
    } else {
      mediaMatch.addEventListener('change', mediaHandler);
    }
  };

  const removeBrowserResizeListener = () => {
    if (isUserBrowserSafari) {
      mediaMatch.removeListener(mediaHandler);
    } else {
      mediaMatch.removeEventListener('change', mediaHandler);
    }
  };

  useEffect(() => {
    addBrowserResizeListener();
    return () => removeBrowserResizeListener();
  });

  return matches;
};

export default UseMediaQuery;
