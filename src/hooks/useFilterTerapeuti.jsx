import { useState, useEffect } from 'react';

const useFilterTerapeuti = (terapeuti, specializare) => {
  const [filteredTerapeuti, setFilteredTerapeuti] = useState();

  useEffect(() => {
    if (specializare) {
      const filteredArray = terapeuti.filter((terapeut) =>
        terapeut.specializare.toLowerCase().includes(specializare),
      );
      setFilteredTerapeuti(filteredArray);
    }
  }, [terapeuti, specializare]);

  return { filteredTerapeuti };
};

export default useFilterTerapeuti;
