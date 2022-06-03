import { useEffect, useContext } from 'react';
import { useAnimation } from 'framer-motion';
import { AppContext } from '../contexts/AppContext';

const useFadeInChildren = (inView, custom) => {
  const fadeInChildren = useAnimation();
  const {isDesktop} = useContext(AppContext);

  useEffect(() => {
    if(inView & !isDesktop) {
      fadeInChildren.start({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.25 },
      })
    }
    if(!inView & !isDesktop) {
      fadeInChildren.start({ opacity: 0, y: 50 });
    }
    if(isDesktop) {
      fadeInChildren.set({ opacity: 1, y: 0 })
    }
  }, [inView, fadeInChildren]);

  return fadeInChildren;
};

export default useFadeInChildren;
