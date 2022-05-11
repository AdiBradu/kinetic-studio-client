import React from 'react';
import './FooterLinks.component.scss';
import footerLinks from '../../../data/footerLinks.json';

export default function FooterLinks() {
  return (
    <div className='footer-links flex flex-column'>
        <p className="navlink">linkuri utile</p>
        <ul>
            {
                footerLinks.map( (link, index) => 
                    <li key={index}><p className='small'>{link.link}</p></li>
                )
            }
        </ul>
    </div>
  )
}
