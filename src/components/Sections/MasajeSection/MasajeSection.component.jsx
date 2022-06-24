import React, { useContext } from 'react';
import './MasajeSection.component.scss';
import ImagePlaceholder from '../../ImagePlaceholder/ImagePlaceholder.component.jsx';
import MasajRelaxare from '../../../assets/images/masajRelaxare.jpg';
import MasajTerapeutic from '../../../assets/images/masajTerapeutic.jpg';
import { AppContext } from '../../../contexts/AppContext';

export default function MasajeSection() {
  const { isTablet } = useContext(AppContext);

  return (
    <div className="masaje-section">
      <div className={isTablet ? 'row flex-row' : 'row flex-column'}>
        <ImagePlaceholder
          key={'terapeutic'}
          image={'https://kineticstudio.ro/images/masajTerapeutic.webp'}
          imageAlt={'masajTerapeutic'}
          classe={'masaj-terapeutic'}
        />
        <div className="masaj-body">
          <div className="half-container">
            <div className="masaj-body-header">
              <p className="caption">tipuri de masaje</p>
              <h2>Masaj terapeutic</h2>
            </div>
            <p>
              Va doare spatele, stati toata ziua pe scaun, la birou, sau poate
              va petreceti mult timp in masina?
            </p>
            <p>
              Masajul terapeutic este solutia perfecta, deoarece printr-o
              combinatie de tehnici si manevre ajuta la detensionarea
              musculaturii ceea ce duce la o imbunatatire a mobilitatii si
              totodata a posturii.
            </p>
            <p>
              Detalii despre preturi si pachete gasiti in sectiunea Servicii.
            </p>
          </div>
        </div>
      </div>
      <div className={isTablet ? 'row row-reverse' : 'row flex-column'}>
        <ImagePlaceholder
          key={'relaxare'}
          image={'https://kineticstudio.ro/images/masajRelaxare.webp'}
          imageAlt={'masajRelaxare'}
          classe={'masaj-relaxare'}
        />
        <div className="masaj-body">
          <div className="half-container">
            <div className="masaj-body-header">
              <p className="caption">tipuri de masaje</p>
              <h2>Masaj de relaxare</h2>
            </div>
            <p>
              Ati avut o zi stresanta si epuizanta? Aveti probleme de circulatie
              periferica sau poate pur si simplu va doriti un mic rasfat?
            </p>
            <p>
              Masajul de relaxare este cel mai potrivit deoarece ajuta la
              reducerea anxietatii, a oboselii sau a stresului si de asemenea
              imbunatateste calitatea somnului.
            </p>
            <p>
              Detalii despre preturi si pachete gasesti in sectiunea Servicii.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
