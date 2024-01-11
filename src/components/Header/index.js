import menu from '../../assets/icons/menu.svg';
import instagram from '../../assets/icons/instagram.svg';
import logo from '../../assets/images/logo.svg';
import Container from './styles';

function Header() {
  function handleMenuClick() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.style.width = '250px';
    content.classList.add('blur');
  }

  return (
    <Container>
      <div>
        <button id="menuBtn" onClick={handleMenuClick}>
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
