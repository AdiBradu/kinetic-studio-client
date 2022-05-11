import React, {useContext} from 'react';
import './BottomInfo.component.scss';
import variables from '../../../../styles/_variables.module.scss';
import MapInfo from '../MapInfo/MapInfo.component';
import SocialMediaGroup from '../../../SocialMediaGroup/SocialMediaGroup.component.jsx';
import CallButton from '../../../CallButton/CallButton.component.jsx';
import { AppContext } from '../../../../contexts/AppContext';

export default function BottomInfo() {
  const {isTablet} = useContext(AppContext);
  return (
    <div className='hero-bottom-info'>
      <div className={isTablet ? "container-fluid flex mx-auto space-between px py" : "container flex mx-auto space-between px py"}>
        <MapInfo/>
        <SocialMediaGroup color={variables.textLight}/>
        <CallButton/>
      </div>
    </div>
  )
}
