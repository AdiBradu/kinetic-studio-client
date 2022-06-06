import { useQuery } from "@apollo/client";
import { useState, useEffect } from 'react';
import { GET_PARTNER_CURRENT_SCHEDULE, GET_PARTNER_FILLED_TIME_SLOTS } from "../graphql/queries";
import { processPartnerSched } from "../utils";

const useGetTerapeutCalendarAndProgramari = (terapeuti, terapeutId) => {
  const [terapeutCalendar, setTerapeutCalendar] = useState([]);
  const [terapeutProgramari, setTerapeutProgramari] = useState([]);

  /* useEffect(() => {
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

  return { terapeutCalendar, terapeutProgramari }; */
  const partnerSchedQObj = useQuery(GET_PARTNER_CURRENT_SCHEDULE, {variables: {id: parseFloat(terapeutId)}});
  const querySchedData = partnerSchedQObj?.data ? partnerSchedQObj.data['getPartnerCurrentSchedule'] : [];
  
  const partnerFilledTSlotsQObj = useQuery(GET_PARTNER_FILLED_TIME_SLOTS, {variables: {id: parseFloat(terapeutId)}});
  const queryFilledTSlotsData = partnerFilledTSlotsQObj?.data ? partnerFilledTSlotsQObj.data['getPartnerFilledTimeSlots'] : [];
  useEffect(() => {   
    if(querySchedData) {
      const processedSched  = processPartnerSched(querySchedData);    
      if(processedSched.length){
        setTerapeutCalendar(processedSched);
      } 
    }
    if(queryFilledTSlotsData) {
      const processedTSlots = processPartnerSched(queryFilledTSlotsData);    
      if(processedTSlots.length){
        setTerapeutProgramari(processedTSlots);
      } 
    }
  }, [querySchedData, queryFilledTSlotsData])
  
  return { terapeutCalendar, terapeutProgramari };
};

export default useGetTerapeutCalendarAndProgramari;
