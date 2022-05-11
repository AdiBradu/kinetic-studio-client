import React, { createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const isMobile = useMediaQuery({ query: `(min-width: 0px)` });
    const isTablet = useMediaQuery({ query: `(min-width: 768px)` });
    const isDesktop = useMediaQuery({ query: `(min-width: 1440px)` });
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
    const isLandscape = useMediaQuery({ query: "(orientation: landscape)" });

    return (
        <AppContext.Provider
            value={{
                isMobile,
                isTablet,
                isDesktop,
                isPortrait,
                isLandscape,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}
