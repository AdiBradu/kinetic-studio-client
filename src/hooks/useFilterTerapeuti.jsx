import { useState, useEffect } from "react";

const useFilterTerapeuti = (terapeuti, specializare) => {

  const [filteredTerapeuti, setFilteredTerapeuti] = useState();

  useEffect(() => {
    if (terapeuti) {
      const filteredArray = terapeuti.filter((terapeut) =>
        terapeut.specializare.includes(specializare)
      );
      setFilteredTerapeuti(filteredArray);
    }
  }, [terapeuti, specializare]);

  return { filteredTerapeuti };
};

export default useFilterTerapeuti;
