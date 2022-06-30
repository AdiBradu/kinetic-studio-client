import React, { Suspense, lazy } from 'react';
import './LandingPage.component.scss';
import HeroSection from '../../components/Sections/HeroSection/HeroSection.component.jsx';
import BenefitsSection from '../../components/Sections/BnefitsSection/BenefitsSection.component';
import Spinner from '../../components/Spinner/Spinner.component';
// import MasajeSection from '../../components/Sections/MasajeSection/MasajeSection.component';

// import ServiciiSection from '../../components/Sections/ServiciiSection/ServiciiSection.component.jsx';
// import TerapeutSection from '../../components/Sections/TerapeutiSection/TerapeutiSection.component.jsx';
// import ProgramareSection from '../../components/Sections/ProgramareSection/ProgramareSection.component.jsx';

const MasajeSection = lazy(() =>
  import('../../components/Sections/MasajeSection/MasajeSection.component'),
);
const ServiciiSection = lazy(() =>
  import(
    '../../components/Sections/ServiciiSection/ServiciiSection.component.jsx'
  ),
);
const TerapeutSection = lazy(() =>
  import(
    '../../components/Sections/TerapeutiSection/TerapeutiSection.component.jsx'
  ),
);
const ProgramareSection = lazy(() =>
  import(
    '../../components/Sections/ProgramareSection/ProgramareSection.component.jsx'
  ),
);

export default function LandingPage() {
  return (
    <div className="landing-page">
      <HeroSection />
      <Suspense fallback={<Spinner />}>
        <BenefitsSection />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <MasajeSection />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ServiciiSection />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <TerapeutSection />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ProgramareSection />
      </Suspense>
    </div>
  );
}
