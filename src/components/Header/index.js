import Container from './styles';

import menu from '../../assets/icons/menu.svg';
import instagram from '../../assets/icons/instagram.svg';
import logo from '../../assets/images/logo.svg';

function Header({ onMenuClick }) {
  return (
    <Container>
      <div>
        <button id="menuBtn" onClick={onMenuClick}>
          <img src={menu} alt="Menu" />
          <span>MENU</span>
        </button>
        <img
          className="header-logo"
          src={logo}
          alt="Paróquia Nossa Senhora Da Glória"
        />
        <div className="instagram-img">
          <img src={instagram} alt="Instagram" />
        </div>
      </div>
    </Container>
  );
}
export default Header;
