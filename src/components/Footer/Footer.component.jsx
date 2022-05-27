import React, { useContext } from 'react';
import './Footer.component.scss';
import variables from '../../styles/_variables.module.scss';
import FooterLinks from './FooterLinks/FooterLinks.component';
import SocialMediaGroup from '../SocialMediaGroup/SocialMediaGroup.component';
import Netopia from '../../assets/images/netopia.png';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder.component.jsx';
import { ReactComponent as FooterLogo } from '../../assets/logos/logoKineticStudioPortrait.svg';
import { AppContext } from '../../contexts/AppContext';

export default function Footer() {
  const { isTablet } = useContext(AppContext);

  return (
    <div className="footer">
      <div
        className={
          isTablet
            ? 'container-fluid flex justify-center padding'
            : 'container justify-center flex mx-auto padding'
        }
      >
        <FooterLinks />
        <div className="follow-us flex flex-column">
          <p className="navlink">follow us</p>
          <SocialMediaGroup color={variables.textDark} />
        </div>
        {/* <img src={Netopia} alt="netopia" className="netopia flex"/> */}
        <ImagePlaceholder image={Netopia} classe={'netopia flex'} />
        <div className="footer-logo flex">
          <FooterLogo />
        </div>
      </div>
      <div
        className={
          isTablet
            ? 'container-fluid flex px py footer-copyright padding'
            : 'container flex mx-auto px py footer-copyright padding'
        }
      >
        <p className="copyright">
          Copyright 2022 kinetic studio. Toate drepturile rezervate.
        </p>
      </div>
    </div>
  );
}
