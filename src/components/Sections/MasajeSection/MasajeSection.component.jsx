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
          key={'relaxare'}
          image={"https://kineticstudio.ro/images/masajRelaxare.webp"}
          imageAlt={'masajRelaxare'}
          classe={'masaj-relaxare'}
        />
        <div className="masaj-body container">
          <div className="half-container">
            <div className="masaj-body-header">
              <p className="caption">tipuri de masaje</p>
              <h2>Masaj de relaxare</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
              eget nulla iaculis odio proin in.
            </p>
          </div>
        </div>
      </div>
      <div className={isTablet ? 'row row-reverse' : 'row flex-column'}>
        <ImagePlaceholder
          key={'terapeutic'}
          image={"https://kineticstudio.ro/images/masajTerapeutic.webp"}
          imageAlt={'masajTerapeutic'}
          classe={'masaj-terapeutic'}
        />
        <div className="masaj-body container">
          <div className="half-container">
            <div className="masaj-body-header">
              <p className="caption">tipuri de masaje</p>
              <h2>Masaj terapeutic</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
              eget nulla iaculis odio proin in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
