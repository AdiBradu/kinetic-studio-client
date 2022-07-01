import React from 'react';
import './ImagePlaceholder.component.scss';
import variables from '../../styles/_variables.module.scss';

export default function ImagePlaceholder({
  image,
  source768,
  source1200,
  source1920,
  source2556,
  classe,
  imageAlt,
  fetchpriority,
}) {
  return (
    <>
      <img
        className={classe}
        srcSet={`${source768 ? source768 : image} 768w, ${
          source1200 ? source1200 : image
        } 1200w, ${source1920 ? source1920 : image} 1920w, ${
          source2556 ? source2556 : image
        } 2556w`}
        src={image}
        alt={imageAlt}
        fetchpriority={fetchpriority}
      />
    </>
  );
}
