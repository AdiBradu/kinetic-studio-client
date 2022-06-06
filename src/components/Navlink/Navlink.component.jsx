import React, { useEffect, useState, useContext } from 'react';
import './Navlink.component.scss';
import { scrollToTarget } from '../../utils.js';
import { NavbarContext } from '../../contexts/NavbarContext.js';
import { motion } from 'framer-motion';
import useFadeInChildren from '../../hooks/useFadeInChildren';
import { Link } from 'react-router-dom';

export default function Navlink({ navlink, inView, custom }) {
  const [target, setTarget] = useState('');
  const { isMenuToggledObj } = useContext(NavbarContext);
  const [isMenuToggled, setIsMenuToggled] = isMenuToggledObj;
  const fadeInChildren = useFadeInChildren(inView, custom);

  const element = () => {
    if (navlink === 'home') {
      return '.hero-section';
    }
    if (navlink === 'tipuri de masaje') {
      return '.masaje-section';
    }
    if (navlink === 'servicii') {
      return '.servicii-section';
    }
    if (navlink === 'terapeuti') {
      return '.terapeuti-section';
    }
  };

  const handleNavlinkClick = () => {
    setIsMenuToggled(!isMenuToggled);
    setTimeout(() => {
      scrollToTarget(target);
    }, 500);
  };

  useEffect(() => {
    const value = element();
    setTarget(value);
  }, [navlink]);

  return (
    <Link to={`/`}>
      <motion.li
        className="navlink"
        onClick={() => handleNavlinkClick()}
        animate={fadeInChildren}
        custom={custom}
      >
        <p>{navlink}</p>
      </motion.li>
    </Link>
  );
}
