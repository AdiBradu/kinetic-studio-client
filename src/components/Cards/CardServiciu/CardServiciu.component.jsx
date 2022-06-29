import React, { useContext } from 'react';
import './CardServiciu.component.scss';
import ButtonProgramare from '../../Button/Button.component.jsx';
import ImagePlaceholder from '../../ImagePlaceholder/ImagePlaceholder.component.jsx';
import { AppContext } from '../../../contexts/AppContext.js';
import { scrollToTarget } from '../../../utils.js';

export default function CardServiciu({
  nume,
  image,
  imageAlt,
  tarif,
  sedinte,
  durata,
  masaj,
}) {
  const { programareFromCardObj } = useContext(AppContext);
  const [programareFromCard, setProgramareFromCard] = programareFromCardObj;

  const handleCardClick = () => {
    scrollToTarget('.programare-section');
    setProgramareFromCard({ denumire: nume, specializare: masaj });
  };

  return (
    <div className="card-serviciu">
      <div className="card-serviciu-header">
        <p className="card">{nume}</p>
        <ImagePlaceholder
          image={image}
          imageAlt={imageAlt}
          classe={'card-image'}
          fetchpriority={'low'}
        />
      </div>
      <div className="card-serviciu-body">
        <div className="card-serviciu-body-data">
          <div className="card-serviciu-body-line">
            <p className="card">tarif:</p>
            <p className="card">{tarif}</p>
          </div>
          <div className="card-serviciu-body-line">
            <p className="card">sedinte:</p>
            <p className="card">{sedinte}</p>
          </div>
          <div className="card-serviciu-body-line">
            <p className="card">durata:</p>
            <p className="card">{durata}</p>
          </div>
          <div className="card-serviciu-body-line">
            <p className="card">masaj:</p>
            <p className="card">{masaj}</p>
          </div>
        </div>
        <div className="btn-wrapper" onClick={() => handleCardClick()}>
          <ButtonProgramare
            classe={'btn-card-programare'}
            text={'programare'}
          />
        </div>
      </div>
    </div>
  );
}
