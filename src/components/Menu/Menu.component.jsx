import React, { useContext } from 'react';
import './Menu.component.scss';
import Navlink from '../Navlink/Navlink.component';
import navlinks from '../../data/navlinks.json';
import Button from '../../components/Button/Button.component.jsx';
import { AppContext } from '../../contexts/AppContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useFadeInFromRight from '../../hooks/useFadeInFromRight';

export default function Menu() {
  const { isDesktop } = useContext(AppContext);
  const [ref, inView] = useInView();
  const fadeInFromRight = useFadeInFromRight(inView);

  return (
    <motion.div className="menu" ref={ref} animate={fadeInFromRight}>
      <ul>
        {navlinks.map((navlink, index) => (
          <Navlink
            key={index}
            navlink={navlink.route}
            inView={inView}
            custom={index * 0.5 + 1}
          />
        ))}
      </ul>
      {isDesktop ? <Button classe={'programare'} text={'programare'} /> : ''}
    </motion.div>
  );
}
