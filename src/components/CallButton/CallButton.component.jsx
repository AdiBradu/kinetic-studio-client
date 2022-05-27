import React from 'react';
import './CallButton.component.scss';
import { ReactComponent as CallButtonIcon } from '../../assets/icons/iconCallButton.svg';

export default function CallButton() {
  return (
    <button className="call-button">
      <CallButtonIcon />
    </button>
  );
}
