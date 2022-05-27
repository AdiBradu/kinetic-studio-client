import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const useFadeInFromBottom = (inView) => {
  const fadeInFromBottom = useAnimation();

  useEffect(() => {
    inView
      ? fadeInFromBottom.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        })
      : fadeInFromBottom.start({ opacity: 0, y: '75px' });
  }, [inView, fadeInFromBottom]);

  return fadeInFromBottom;
};

export default useFadeInFromBottom;