import React, { useContext, useEffect, useState } from 'react';
import './ServiciiSection.component.scss';
import IntroSection from '../IntroSection/IntroSection.component.jsx';
import CardServiciu from '../../Cards/CardServiciu/CardServiciu.component.jsx';
import { AppContext } from '../../../contexts/AppContext';
import { processServices, scrollSlider } from '../../../utils.js';
import { useQuery } from '@apollo/client';
import { GET_ALL_SERVICES } from '../../../graphql/queries';

export default function ServiciiSection() {
  const { isTablet } = useContext(AppContext);
  const [servicii, setServicii] = useState([]);
  useEffect(() => {
    scrollSlider('.slider-container');
  }, []);

  const currentQObj = useQuery(GET_ALL_SERVICES);
  const queryData = currentQObj?.data ? currentQObj.data['getAllServices'] : [];

  useEffect(() => {
    if (queryData) {
      const processedData = processServices(queryData);
      if (processedData.length) {
        setServicii(processedData);
      } else {
        setServicii([]);
      }
    }
  }, [queryData]);

  return (
    <section
      className={
        isTablet
          ? 'servicii-section container mx-auto'
          : 'servicii-section container-fluid mx-auto'
      }
    >
      <IntroSection
        caption={'servicii'}
        title={'Mesaje terapeutice sau de relaxare'}
        copy={
          'Elimina stresul, oboseala si durerile musculare acumalate dupa serviciu sau efort fizic intens.'
        }
      />
      <div className="slider-servicii">
        <div className="slider-container">
          {servicii.map((serviciu, index) => (
            <CardServiciu
              key={index}
              nume={serviciu.denumire}
              image={serviciu.image}
              imageAlt={serviciu.denumire}
              tarif={serviciu.tarif}
              sedinte={serviciu.sedinte}
              durata={serviciu.durata}
              masaj={
                serviciu.denumire.toLowerCase().includes('terapeutic')
                  ? 'terapeutic'
                  : 'relaxare'
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
