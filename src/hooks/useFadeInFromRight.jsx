import { useEffect, useContext } from 'react';
import { useAnimation } from 'framer-motion';
import { AppContext } from '../contexts/AppContext';

const useFadeInFromRight = (inView) => {
  const { isDesktop } = useContext(AppContext);
  const fadeInFromRight = useAnimation();

  useEffect(() => {
    if (!isDesktop & inView) {
      fadeInFromRight.start({
        opacity: 1,
        left: 0,
        transition: { ease: [0, 0.94, 1, 1] },
      });
    }
    if (!isDesktop & !inView) {
      fadeInFromRight.start({ opacity: 0, left: '100vw' });
    }
  }, [inView, fadeInFromRight, isDesktop]);

  return fadeInFromRight;
};

export default useFadeInFromRight;
