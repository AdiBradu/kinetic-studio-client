import React from 'react';
import './LandingPage.component.scss';
import HeroSection from '../../components/Sections/HeroSection/HeroSection.component.jsx';
import BenefitsSection from '../../components/Sections/BnefitsSection/BenefitsSection.component';
import MasajeSection from '../../components/Sections/MasajeSection/MasajeSection.component';

export default function LandingPage() {
  return (
    <div className='landing-page'>
        <HeroSection/>
        <BenefitsSection/>
        <MasajeSection/>
    </div>
  )
}
