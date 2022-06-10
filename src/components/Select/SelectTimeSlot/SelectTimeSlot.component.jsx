import React, { useRef } from 'react';
import './SelectTimeSlot.component.scss';
import { checkIfActiveElement } from '../../../utils.js';

export default function SelectTimeSlot({
  label,
  value,
  handleChange,
  options,
}) {
  const inputRef = useRef(null);
  checkIfActiveElement(inputRef);

  const convertToTime = (input) => {
    let hours = Math.floor(input / 60);
    let minutes = input % 60;
    return `${hours}:${minutes}`;
  };

  return (
    <>
      <div className="select-atom atom-field">
        <label>
          <p>Ora</p>
        </label>
        <select
          name={label}
          onChange={handleChange}
          defaultValue={'default'}
          ref={inputRef}
        >
          {
            <option disabled hidden value={'default'}>
              {value}
            </option>
          }
          {options &&
            options.map((option, index) => (
              <option key={index} value={option}>
                {convertToTime(option)}
              </option>
            ))}
        </select>
      </div>
    </>
  );
}
