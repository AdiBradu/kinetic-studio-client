import React, {useContext} from 'react';
import './Footer.component.scss';
import variables from '../../styles/_variables.module.scss';
import FooterLinks from './FooterLinks/FooterLinks.component';
import SocialMediaGroup from '../SocialMediaGroup/SocialMediaGroup.component';
import Netopia from '../../assets/images/netopia.png';
import {ReactComponent as FooterLogo} from '../../assets/logos/logoKineticStudioPortrait.svg';
import { AppContext } from '../../contexts/AppContext';

export default function Footer() {
    const {isTablet} = useContext(AppContext);

    return (
        <div className='footer'>
            <div className="container flex flex-wrap mx-auto">
                <FooterLinks/>
                <div className="follow-us flex flex-column">
                    <p className="navlink">follow us</p>
                    <SocialMediaGroup color={variables.textDark}/>
                </div>
                <img src={Netopia} alt="netopia" />
                <div className="footer-logo">
                    <FooterLogo/>
                </div>
                <div className="footer-copyright">
                    <p className="copyright">Copyright 2022 kinetic studio. Toate drepturile rezervate.</p>
                </div>
            </div>
        </div>
    )
}
