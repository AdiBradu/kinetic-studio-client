import React, { useContext, useEffect } from 'react';
import './ServiciiSection.component.scss';
import IntroSection from '../IntroSection/IntroSection.component.jsx';
import CardServiciu from '../../Cards/CardServiciu/CardServiciu.component.jsx';
import servicii from '../../../data/servicii.json';
import { AppContext } from '../../../contexts/AppContext';
import { scrollSlider } from '../../../utils.js';

export default function ServiciiSection() {
  const { isTablet } = useContext(AppContext);

  useEffect(() => {
    scrollSlider('.slider-container');
  }, []);

  return (
    <div
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
              masaj={serviciu.specializare}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
