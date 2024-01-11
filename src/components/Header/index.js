import React, { useState } from 'react';

import Container from './styles';

import menuIcon from '../../assets/icons/menu.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import logo from '../../assets/images/logo.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container className={menuOpen ? 'scrolled' : ''}>
      <div>
        <button id="menuBtn" onClick={handleMenuClick}>
          <img src={menuIcon} alt="Menu" />
          <span>MENU</span>
        </button>
        <img
          className="header-logo"
          src={logo}
          alt="Paróquia Nossa Senhora Da Glória"
        />
        <div className="instagram-img">
          <img src={instagramIcon} alt="Instagram" />
        </div>
      </div>
    </Container>
  );
}

export default Header;
