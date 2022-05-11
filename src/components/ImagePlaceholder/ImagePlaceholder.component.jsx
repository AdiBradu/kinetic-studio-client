import React from 'react';
import './ImagePlaceholder.component.scss';

export default function ImagePlaceholder({image, classe}) {

  return (
      <>
          <img src={image} alt="section-pic" className={classe}/>
      </>
  )
}
