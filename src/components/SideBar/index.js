import logo from '../../assets/images/logo.svg';
import Container from './styles';

function SideBar() {
  function handleLinkClick() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.style.width = '0';
    content.classList.remove('blur');
  }

  return (
    <Container id="sidebar">
      <div className="nav-header">
        <img src={logo} alt="Paróquia Nossa Senhora da Glória Horizontal" />
        <h1>Paróquia Nossa Senhora da Glória</h1>
        <p>"Nossa senhora da Glória, rogai por nós"</p>
      </div>
      <a href="#section1" onClick={handleLinkClick}>
        Section 1
      </a>
      <a href="#section2" onClick={handleLinkClick}>
        Section 2
      </a>
      <a href="#section3" onClick={handleLinkClick}>
        Section 3
      </a>
      <button className="close-btn" onClick={handleLinkClick}>
        X
      </button>
    </Container>
  );
}
export default SideBar;
