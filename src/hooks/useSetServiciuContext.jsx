import { useState, useEffect } from "react";

const useSetServiciuContext = (servicii, serviciu) => {

  const [specializare, setSpecializare] = useState();
  const [sedinte, setSedinte] = useState(0);
  const [durataSedinta, setDurataSedinta] = useState();
  // const [terapeutId, setTerapeutId] = useState({ id: "" });

  useEffect(() => {
    if (servicii) {
      servicii.forEach((el) => {
        if (serviciu === el.denumire) {
          setSedinte(el.sedinte);
          setSpecializare(el.specializare);
          //Set terapeutId to nothing to repeat the process of selecting terapeut.
          //This leads to refreshing the checkIfProgramari and checkIfCalendar in Datepicker.
          // setTerapeutId({ id: "" });
          setDurataSedinta((el.durata + 60) * 60000); //milliseconds
        }
      });
    }
  }, [serviciu, servicii]);

  return {
    specializare,
    sedinte,
    durataSedinta,
    // terapeutId,
    // setTerapeutId,
  };
};

export default useSetServiciuContext;
