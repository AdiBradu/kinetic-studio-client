import React from 'react';
import './Navlink.component.scss';

export default function Navlink({navlink}) {
  return (
    <li className='navlink'><p>{navlink}</p></li>
  )
}
