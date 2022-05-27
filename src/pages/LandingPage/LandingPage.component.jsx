import React from 'react';
import './LandingPage.component.scss';
import HeroSection from '../../components/Sections/HeroSection/HeroSection.component.jsx';
import BenefitsSection from '../../components/Sections/BnefitsSection/BenefitsSection.component';
import MasajeSection from '../../components/Sections/MasajeSection/MasajeSection.component';
import ServiciiSection from '../../components/Sections/ServiciiSection/ServiciiSection.component.jsx';
import TerapeutSection from '../../components/Sections/TerapeutiSection/TerapeutiSection.component.jsx';
import ProgramareSection from '../../components/Sections/ProgramareSection/ProgramareSection.component.jsx';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <HeroSection />
      <BenefitsSection />
      <MasajeSection />
      <ServiciiSection />
      <TerapeutSection />
      <ProgramareSection />
    </div>
  );
}
