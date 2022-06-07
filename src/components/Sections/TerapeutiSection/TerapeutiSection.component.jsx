import React, { useContext, useEffect, useState } from 'react';
import './TerapeutiSection.component.scss';
import IntroSection from '../IntroSection/IntroSection.component.jsx';
import CardTerapeut from '../../Cards/CardTerapeut/CardTerapeut.component.jsx';
import { AppContext } from '../../../contexts/AppContext';
import { processPartners, scrollSlider } from '../../../utils.js';
import { useQuery } from '@apollo/client';
import { GET_ALL_PARTNERS } from '../../../graphql/queries';

export default function TerapeutiSection() {
  const { isTablet } = useContext(AppContext);
  const [terapeuti, setTerapeuti] = useState([]);

  useEffect(() => {
    scrollSlider('.slider-terapeuti-group');
  }, []);

  const currentQObj = useQuery(GET_ALL_PARTNERS);
  const queryData = currentQObj?.data ? currentQObj.data['getAllPartners'] : [];

  useEffect(() => {
    if (queryData) {
      const processedData = processPartners(queryData);
      if (processedData.length) {
        setTerapeuti(processedData);
      } else {
        setTerapeuti([]);
      }
    }
  }, [queryData]);

  return (
    <div
      className={
        isTablet
          ? 'terapeuti-section container mx-auto'
          : 'terapeuti-section container-fluid mx-auto'
      }
    >
      <IntroSection
        caption={'terapeuti'}
        title={'Ai pregatire in domeniul kineto terapiei?'}
        copy={
          'Daca ai pregatire in domeniul kineto terapiei te poti alatura echipei KINETIC STUDIO. Contacteaza-ne pe social media sau telefonic!'
        }
      />
      <div className="slider-terapeuti">
        <div className="slider-terapeuti-group">
          {terapeuti.map((terapeut, index) => (
            <CardTerapeut
              key={index}
              nume={`${terapeut.prenume} ${terapeut.nume}`}
              image={terapeut.thumbnail}
              imageAlt={`terapeut ${index}`}
              specializare={terapeut.specializare}
              descriere={terapeut.descriere}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
