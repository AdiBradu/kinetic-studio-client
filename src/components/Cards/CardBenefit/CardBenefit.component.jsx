import React from 'react';
import './CardBenefit.component.scss';

export default function CardBenefit({ icon, header, copy }) {
  return (
    <div className="card-benefit">
      <img src={icon} alt={header} fetchpriority="low" />
      <p className="benefit-header">{header}</p>
      <p className="benefit-copy">{copy}</p>
    </div>
  );
}
