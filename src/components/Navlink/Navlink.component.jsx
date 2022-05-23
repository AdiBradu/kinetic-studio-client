import React, {useEffect, useState, useContext} from 'react';
import './Navlink.component.scss';
import {scrollToTarget} from '../../utils.js';
import {NavbarContext} from '../../contexts/NavbarContext.js';

export default function Navlink({navlink}) {
  const [target, setTarget] = useState('');
  const {isMenuToggledObj} = useContext(NavbarContext);
  const [isMenuToggled, setIsMenuToggled] = isMenuToggledObj;

  const element = () => {
    if (navlink === 'home') {
      return '.hero-section'
    }
    if (navlink === 'tipuri de masaje') {
      return '.masaje-section'
    }
    if (navlink === 'servicii') {
      return '.servicii-section'
    }
    if (navlink === 'terapeuti') {
      return '.terapeuti-section'
    }
  }

  const handleNavlinkClick = () => {
    setIsMenuToggled(!isMenuToggled);
    scrollToTarget(target);
  }

  useEffect(() => {
      const value = element();
      setTarget(value)
  }, [navlink])
  
  return (
    <li 
      className='navlink'
      onClick={() => handleNavlinkClick()}
    >
      <p>{navlink}</p>
    </li>
  )
}
