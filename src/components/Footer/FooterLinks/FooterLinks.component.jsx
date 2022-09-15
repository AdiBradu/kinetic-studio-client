import React from 'react';
import './FooterLinks.component.scss';
import footerLinks from '../../../data/footerLinks.json';
import ModalGdpr from '../../Modal/GDPR/ModalGdpr.component';
import ModalCookies from '../../Modal/Cookies/ModalCookies.component';
import ModalTermeni from '../../Modal/Termeni/ModalTermeni.componet';

import { useState } from 'react';

export default function FooterLinks() {
  const [visible, setVisible] = useState(false);
  const [link, setLink] = useState();

  const handleClose = (e) => {
    setVisible(!visible);
    setLink(e);
  };

  return (
    <div className="footer-links flex flex-column">
      <p className="navlink">linkuri utile</p>
      <ul>
        {footerLinks.map((link, index) => (
          <li key={index} onClick={() => handleClose(link.link)}>
            <p className="small">{link.link}</p>
          </li>
        ))}
      </ul>
      {visible & (link === 'GDPR') ? (
        <ModalGdpr handleClose={handleClose} />
      ) : visible & (link === 'politica cookies') ? (
        <ModalCookies handleClose={handleClose} />
      ) : visible & (link === 'termeni si conditii') ? (
        <ModalTermeni handleClose={handleClose} />
      ) : (
        ''
      )}
    </div>
  );
}
