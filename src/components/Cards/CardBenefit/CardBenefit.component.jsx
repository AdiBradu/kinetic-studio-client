import React from 'react';
import './CardBenefit.component.scss';
import useFadeInFromBottom from '../../../hooks/useFadeInFromBottom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CardBenefit({ icon, header, copy }) {
  const [ref, inView] = useInView({ threshold: 0 });
  const fadeInFromBottom = useFadeInFromBottom(inView);

  return (
    <motion.div className="card-benefit" animate={fadeInFromBottom} ref={ref}>
      <img src={icon} alt={header} />
      <p className="benefit-header">{header}</p>
      <p className="benefit-copy">{copy}</p>
    </motion.div>
  );
}
