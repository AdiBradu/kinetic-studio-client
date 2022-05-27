import React from 'react';
import './IntroSection.component.scss';

export default function IntroSection({ caption, title, copy }) {
  return (
    <div className="intro-section">
      <div className="intro-section-header">
        <p className="caption">{caption}</p>
        <h2>{title}</h2>
      </div>
      <p>{copy}</p>
    </div>
  );
}
