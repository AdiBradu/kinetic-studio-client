import React from 'react';
import './BenefitsSection.component.scss';
import benefits from '../../../data/benefits.json';
import BenefitCard from '../../Cards/CardBenefit/CardBenefit.component.jsx';

export default function BenefitsSection() {
  return (
    <section className="container benefits-section mx-auto">
      {benefits.map((benefit, index) => (
        <BenefitCard
          key={index}
          icon={benefit.icon}
          header={benefit.header}
          copy={benefit.copy}
        />
      ))}
    </section>
  );
}
