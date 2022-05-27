import React from 'react';
import './Button.component.scss';

export default function Button({ classe, text }) {
  return (
    <button className={classe}>
      <p>{text}</p>
    </button>
  );
}
