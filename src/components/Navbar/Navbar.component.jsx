import React, { useContext } from 'react';
import './Navbar.component.scss';
import Logo from '../Logo/Logo.component.jsx';
import MenuToggler from '../MenuToggler/MenuToggler.component.jsx';
import Menu from '../Menu/Menu.component.jsx';
import { NavbarContext } from '../../contexts/NavbarContext';
import { AppContext } from '../../contexts/AppContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { isTablet, isDesktop } = useContext(AppContext);
  const { isMenuToggledObj } = useContext(NavbarContext);
  const [isMenuToggled, setIsMenuToggled] = isMenuToggledObj;

  const handleNavlinkClick = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <div className="navbar">
      <div
        className={
          isTablet
            ? 'container-fluid flex mx-auto space-between padding align-center'
            : 'container flex mx-auto space-between padding align-center'
        }
      >
        <Link to={'/'} onClick={() => handleNavlinkClick()} rel="logo">
          <Logo />
        </Link>
        {!isDesktop ? <MenuToggler /> : ''}
        {isDesktop ? <Menu /> : isMenuToggled & !isDesktop ? <Menu /> : ''}
      </div>
    </div>
  );
}
