import { useState, useEffect } from 'react';

const useFilterServicii = (servicii, specializare) => {
  const [filteredServicii, setFilteredservicii] = useState();

  useEffect(() => {
    if (specializare) {
      const filteredArray = servicii.filter((serviciu) =>
        serviciu.denumire.toLowerCase().includes(specializare),
      );
      setFilteredservicii(filteredArray);
    }
  }, [servicii, specializare]);

  return { filteredServicii };
};

export default useFilterServicii;
