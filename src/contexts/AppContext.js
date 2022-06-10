import React, { createContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const AppContext = createContext();

export const AppProvider = (props) => {
  const isMobile = useMediaQuery({ query: `(min-width: 0px)` });
  const isTablet = useMediaQuery({ query: `(min-width: 768px)` });
  const isDesktop = useMediaQuery({ query: `(min-width: 1440px)` });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });

  const [programareFromCard, setProgramareFromCard] = useState(null);

  return (
    <AppContext.Provider
      value={{
        isMobile,
        isTablet,
        isDesktop,
        isPortrait,
        isLandscape,
        programareFromCardObj: [programareFromCard, setProgramareFromCard],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
