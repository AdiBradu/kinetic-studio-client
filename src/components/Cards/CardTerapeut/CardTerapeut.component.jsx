import React from 'react';
import './CardTerapeut.component.scss';
import ImagePlaceholder from '../../ImagePlaceholder/ImagePlaceholder.component.jsx';

export default function CardTerapeut({image, nume, specializare, descriere}) {
  return (
    <div className="card-terapeut">
        <div className="card-terapeut-header">
            <ImagePlaceholder image={image} classe={"card-image"}/>
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
                <p className="card-descriere">{descriere}</p>
            </div>
        </div>
    </div>
  )
}
