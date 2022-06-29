import React from 'react';
import './CardTerapeut.component.scss';
import ImagePlaceholder from '../../ImagePlaceholder/ImagePlaceholder.component.jsx';
import { toCapitalCase } from '../../../utils.js';

export default function CardTerapeut({
  image,
  imageAlt,
  nume,
  specializare,
  descriere,
}) {
  return (
    <div className="card-terapeut">
      <div className="card-terapeut-header">
        <ImagePlaceholder
          image={image}
          imageAlt={imageAlt}
          classe={'card-image'}
          fetchpriority={'low'}
        />
      </div>
      <div className="card-terapeut-body">
        <div className="card-terapeut-body-data">
          <div className="card-terapeut-body-group">
            <div className="card-terapeut-body-group-header">
              <p className="card-nume">{nume}</p>
            </div>
            <div className="card-terapeut-body-group-header">
              <p className="card-specializare">{specializare}</p>
            </div>
          </div>
        </div>
        <div className="card-terapeut-body-description">
          <p className="card-descriere">{toCapitalCase(descriere)}</p>
        </div>
      </div>
    </div>
  );
}
