import React from 'react';
import './SocialMediaGroup.component.scss';

export default function SocialMediaGroup({color}) {
  return (
    <div className='social-media-group'>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.6648 3.20001C6.54851 3.20001 3.2002 6.55143 3.2002 10.6688V21.3354C3.2002 25.4517 6.55161 28.8 10.6689 28.8H21.3356C25.4519 28.8 28.8002 25.4486 28.8002 21.3313V10.6646C28.8002 6.54833 25.4488 3.20001 21.3314 3.20001H10.6648ZM23.4669 7.46668C24.0557 7.46668 24.5335 7.94455 24.5335 8.53335C24.5335 9.12215 24.0557 9.60001 23.4669 9.60001C22.8781 9.60001 22.4002 9.12215 22.4002 8.53335C22.4002 7.94455 22.8781 7.46668 23.4669 7.46668ZM16.0002 9.60001C19.5298 9.60001 22.4002 12.4704 22.4002 16C22.4002 19.5296 19.5298 22.4 16.0002 22.4C12.4706 22.4 9.60019 19.5296 9.60019 16C9.60019 12.4704 12.4706 9.60001 16.0002 9.60001ZM16.0002 11.7333C14.8686 11.7333 13.7834 12.1829 12.9832 12.983C12.1831 13.7832 11.7335 14.8684 11.7335 16C11.7335 17.1316 12.1831 18.2168 12.9832 19.017C13.7834 19.8172 14.8686 20.2667 16.0002 20.2667C17.1318 20.2667 18.217 19.8172 19.0172 19.017C19.8173 18.2168 20.2669 17.1316 20.2669 16C20.2669 14.8684 19.8173 13.7832 19.0172 12.983C18.217 12.1829 17.1318 11.7333 16.0002 11.7333Z" fill={color}/>
        </svg>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.0002 3.20001C8.9314 3.20001 3.2002 8.93121 3.2002 16C3.2002 22.4171 7.92766 27.7163 14.0866 28.6421V19.392H10.9197V16.0277H14.0866V13.7888C14.0866 10.0821 15.8925 8.45548 18.973 8.45548C20.4482 8.45548 21.229 8.56534 21.5981 8.61441V11.5509H19.4967C18.189 11.5509 17.7325 12.7915 17.7325 14.1888V16.0277H21.565L21.0455 19.392H17.7325V28.6688C23.9799 27.8219 28.8002 22.48 28.8002 16C28.8002 8.93121 23.069 3.20001 16.0002 3.20001Z" fill={color}/>
        </svg>
    </div>
  )
}
