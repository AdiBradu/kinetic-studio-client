import { useState, useEffect } from 'react';

const useGetTerapeutCalendarAndProgramari = (terapeuti, terapeutId) => {
  const [terapeutCalendar, setTerapeutCalendar] = useState([]);
  const [terapeutProgramari, setTerapeutProgramari] = useState([]);

  useEffect(() => {
    if (terapeutId) {
      if (terapeutId.terapeut !== '') {
        for (let i = 0; i < terapeuti.length; i++) {
          if (terapeuti[i].id == terapeutId) {
            setTerapeutCalendar(terapeuti[i].calendar);
            setTerapeutProgramari(terapeuti[i].programari);
          }
        }
      }
    }
  }, [terapeutId]);

  return { terapeutCalendar, terapeutProgramari };
};

export default useGetTerapeutCalendarAndProgramari;
