import logo from '../../assets/images/logo.svg';
import Container from './styles';

function SideBar({ isOpen, onLinkClick }) {
  return (
    <Container id="sidebar" style={{ width: isOpen ? '250px' : '0' }}>
      <div className="nav-header">
        <img src={logo} alt="Paróquia Nossa Senhora da Glória Horizontal" />
        <h1>Paróquia Nossa Senhora da Glória</h1>
        <p>"Nossa senhora da Glória, rogai por nós"</p>
      </div>
      <a href="#section1" onClick={onLinkClick}>
        Section 1
      </a>
      <a href="#section2" onClick={onLinkClick}>
        Section 2
      </a>
      <a href="#section3" onClick={onLinkClick}>
        Section 3
      </a>
      <button className="close-btn" onClick={onLinkClick}>
        X
      </button>
    </Container>
  );
}
export default SideBar;
