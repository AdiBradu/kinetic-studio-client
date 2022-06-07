import React, { useRef } from 'react';
import './SelectServiciu.component.scss';
import { checkIfActiveElement } from '../../../utils.js';

export default function SelectServiciu({
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
            <p>Alege serviciul</p>
          </label>
          <select
            name={name}
            onChange={handleChange}
            defaultValue={'default'}
            ref={inputRef}
          >
            {
              <option disabled hidden value={'default'}>
                Alege serviciul
              </option>
            }
            {options.map((option, index) => (
              <option key={index} value={option.id}>
                {option.denumire}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}
