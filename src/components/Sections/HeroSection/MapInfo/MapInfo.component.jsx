import React from 'react';
import './MapInfo.component.scss';
import {ReactComponent as MapIcon} from '../../../../assets/icons/iconMap.svg';

export default function MapInfo() {
  return (
    <div className='map-info'>
        <MapIcon/>
        <p>Deplasarea la domiciliu se face doar in Municipiul Bucuresti si judetul Ilfov.</p>
    </div>
  )
}
