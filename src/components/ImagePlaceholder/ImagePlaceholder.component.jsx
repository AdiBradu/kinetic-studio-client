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
    <picture className={classe}>
      <source srcSet={source768} media={`(min-width: ${variables.md})`} />
      <source srcSet={source1200} media={`(min-width: ${variables.xl})`} />
      <source srcSet={source1920} media={`(min-width: ${variables.xxxl})`} />
      <source srcSet={source2556} media={`(min-width: ${variables.twok})`} />
      <img src={image} alt={imageAlt} fetchpriority={fetchpriority} />
    </picture>
  );
}
