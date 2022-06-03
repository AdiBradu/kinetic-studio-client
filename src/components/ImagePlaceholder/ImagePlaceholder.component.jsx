import React from 'react';
import './ImagePlaceholder.component.scss';

export default function ImagePlaceholder({ image, classe, imageAlt }) {
  return (
    <>
      <img src={image} alt={imageAlt} className={classe} />
    </>
  );
}
