import { useState, useEffect } from 'react';

const useSetServiciuContext = (servicii, serviciu) => {
  const [specializare, setSpecializare] = useState();
  const [sedinte, setSedinte] = useState(0);
  const [durataSedinta, setDurataSedinta] = useState();

  useEffect(() => {
    if (servicii) {
      servicii.forEach((el) => {
        if (serviciu === el.denumire) {
          setSedinte(el.sedinte);
          setSpecializare(el.specializare);
          setDurataSedinta((el.durata + 60) * 60000); //milliseconds
        }
      });
    }
  }, [serviciu, servicii]);

  return {
    specializare,
    sedinte,
    durataSedinta,
  };
};

export default useSetServiciuContext;
