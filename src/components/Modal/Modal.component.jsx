import React from 'react';
import './Modal.component.scss';

export default function Modal({ children, handleClose }) {
  console.log(handleClose);
  return (
    <div className="modal padding">
      <div className="container">
        {children}
        <p className="close-modal" onClick={handleClose}>
          am luat la cunostinta
        </p>
      </div>
    </div>
  );
}
