import React, { useRef } from 'react';
import './SelectSpecializare.component.scss';
import { checkIfActiveElement } from '../../../utils.js';

export default function SelectSpecializare({
  options,
  label,
  name,
  value,
  handleChange,
}) {
  const inputRef = useRef(null);
  checkIfActiveElement(inputRef);

  return (
    <>
      {options.length > 0 && (
        <div className="select-atom atom-field">
          <label>
            <p>Specializare</p>
          </label>
          <select
            name={name}
            onChange={handleChange}
            defaultValue={'default'}
            ref={inputRef}
          >
            {
              <option disabled hidden value={'default'}>
                {value}
              </option>
            }
            {options.map((option, index) => (
              <option key={index} value={option.denumire}>
                {option.denumire}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}
