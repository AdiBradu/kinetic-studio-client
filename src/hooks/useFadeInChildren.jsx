import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const useFadeInChildren = (inView, custom) => {
  const fadeInChildren = useAnimation();

  useEffect(() => {
    inView
      ? fadeInChildren.start({
          opacity: 1,
          y: 0,
          transition: { delay: custom * 0.2 },
        })
      : fadeInChildren.start({ opacity: 0, y: 50 });
  }, [inView, fadeInChildren]);

  return fadeInChildren;
};

export default useFadeInChildren;
