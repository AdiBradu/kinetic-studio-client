import React from 'react';
import './HeroSection.component.scss';
import ImagePlaceholder from '../../ImagePlaceholder/ImagePlaceholder.component';
import Button from '../../Button/Button.component';
import BottomInfo from './BottomInfo/BottomInfo.component';
import { scrollToTarget } from '../../../utils.js';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <ImagePlaceholder
        image={'https://kineticstudio.ro/images/heroImage__375W.webp'}
        source768={'https://kineticstudio.ro/images/heroImage__768W.webp'}
        source1200={'https://kineticstudio.ro/images/heroImage__1200W.webp'}
        source1920={'https://kineticstudio.ro/images/heroImage__1920W.webp'}
        source2556={'https://kineticstudio.ro/images/heroImage__2556W.webp'}
        imageAlt={'Kinetic Studio'}
        classe={'hero-image'}
        fetchpriority={'high'}
      />
      <div className="hero-body">
        <div className="hero-body-message">
          <h1 className="display3">Bine ati venit la KineticStudio</h1>
          <p>
            Fie ca va aflati la hotel sau la birou, fie ca va doriti o
            programare in confortul propriei casei, alegeti unul dintre
            serviciile noastre si bucurati-va de experienta KineticStudio!
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
