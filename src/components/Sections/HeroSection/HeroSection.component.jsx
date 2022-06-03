import React from 'react';
import './HeroSection.component.scss';
import ImagePlaceholder from '../../ImagePlaceholder/ImagePlaceholder.component';
import Button from '../../Button/Button.component';
import BottomInfo from './BottomInfo/BottomInfo.component';
import { scrollToTarget } from '../../../utils.js';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <ImagePlaceholder image={"https://kineticstudio.ro/images/heroImage.webp"} imageAlt={'Kinetic Studio'} classe={'hero-image'} />
      <div className="hero-body">
        <div className="hero-body-message">
          <h1 className="display3">
            Masaj de relaxare si terapeutic la domiciliu
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget
            nulla iaculis odio proin in.
          </p>
        </div>
        <div
          className="btn-wrapper"
          onClick={() => scrollToTarget('.programare-section')}
        >
          <Button classe={'btn-programare-solid'} text={'programare'} />
        </div>
      </div>
      <BottomInfo />
    </section>
  );
}
