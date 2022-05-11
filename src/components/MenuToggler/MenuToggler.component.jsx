import React, {useContext, useState} from 'react';
import './MenuToggler.component.scss';
import variables from '../../styles/_variables.module.scss';
import { NavbarContext } from '../../contexts/NavbarContext';

export default function MenuToggler() {
  const {isMenuToggledObj} = useContext(NavbarContext);
  const [isMenuToggled, setIsMenuToggled] = isMenuToggledObj;
  const [togglerColor, setColorToggler] = useState(variables.textLight);
  
  return (
    <button className='menu-toggler' onClick={() => setIsMenuToggled(!isMenuToggled)} >
      <svg viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 3.69174C0 3.21835 0.383756 2.83459 0.857143 2.83459H23.1429C23.6162 2.83459 24 3.21835 24 3.69174C24 4.16512 23.6162 4.54888 23.1429 4.54888H0.857143C0.383756 4.54888 0 4.16512 0 3.69174Z" fill={togglerColor}/>
          <path fillRule="evenodd" clipRule="evenodd" d="M0 12.2632C0 11.7898 0.383756 11.406 0.857143 11.406H23.1429C23.6162 11.406 24 11.7898 24 12.2632C24 12.7366 23.6162 13.1203 23.1429 13.1203H0.857143C0.383756 13.1203 0 12.7366 0 12.2632Z" fill={togglerColor}/>
          <path fillRule="evenodd" clipRule="evenodd" d="M0 20.8346C0 20.3612 0.383756 19.9775 0.857143 19.9775H23.1429C23.6162 19.9775 24 20.3612 24 20.8346C24 21.308 23.6162 21.6917 23.1429 21.6917H0.857143C0.383756 21.6917 0 21.308 0 20.8346Z" fill={togglerColor}/>
      </svg>
    </button>
  )
}
