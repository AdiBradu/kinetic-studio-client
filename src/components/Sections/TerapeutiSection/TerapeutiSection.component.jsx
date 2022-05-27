import React, { useContext, useEffect } from 'react';
import './TerapeutiSection.component.scss';
import IntroSection from '../IntroSection/IntroSection.component.jsx';
import CardTerapeut from '../../Cards/CardTerapeut/CardTerapeut.component.jsx';
import terapeuti from '../../../data/terapeuti.json';
import { AppContext } from '../../../contexts/AppContext';
import { scrollSlider } from '../../../utils.js';

export default function TerapeutiSection() {
  const { isTablet } = useContext(AppContext);

  useEffect(() => {
    scrollSlider('.slider-terapeuti-group');
  }, []);

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
              specializare={terapeut.specializare}
              descriere={terapeut.descriere}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
