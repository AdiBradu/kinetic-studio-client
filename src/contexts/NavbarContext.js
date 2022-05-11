import React, { useState, createContext } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = (props) => {

    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <NavbarContext.Provider
            value={{
                isMenuToggledObj: [isMenuToggled, setIsMenuToggled],
                isMenuOpenObj: [isMenuOpen, setIsMenuOpen]
            }}
        >
            {props.children}
        </NavbarContext.Provider>
    );
}
