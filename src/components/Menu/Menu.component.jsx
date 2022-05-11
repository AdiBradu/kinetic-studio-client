import React, {useContext} from 'react';
import './Menu.component.scss';
import Navlink from '../Navlink/Navlink.component';
import navlinks from '../../data/navlinks.json';
import Button from '../../components/Button/Button.component.jsx';
import { AppContext } from '../../contexts/AppContext';

export default function Menu() {
  const {isDesktop} = useContext(AppContext);

  return (
    <div className='menu'>
        <ul>
            {
                navlinks.map( (navlink, index) => 
                    <Navlink key={index} navlink={navlink.route}/>
                )
            }
        </ul>
        {
          isDesktop ? <Button classe={'programare'} text={'programare'}/> : ''
        }
    </div>
  )
}
