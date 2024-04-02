import React from 'react';
import yourLogoImage from '../images/logo.jpeg'; 
import facebookIcon from '../images/fb.jpeg'; 
import instagramIcon from '../images/insta logo.jpeg'; 

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={yourLogoImage} alt="Your Logo" />
      </div>
      <div className="social-icons">
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
      </div>
    </header>
  );
}

export default Header;
