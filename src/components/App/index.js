import { Content, Header, SideBar } from './styles';

import menu from '../../assets/images/menu.svg';
import logo from '../../assets/images/logo.svg';
import instagram from '../../assets/images/instagram.svg';

function App() {
  function handleMenuClick() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.style.width = '250px';
    content.classList.add('blur');
  }

  function handleLinkClick() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.style.width = '0';
    content.classList.remove('blur');
  }

  return (
    <>
      <Header>
        <button id="menuBtn" onClick={handleMenuClick}>
          <img src={menu} alt="Menu" />
          <span>MENU</span>
        </button>
        <img
          className="header-logo"
          src={logo}
          alt="Paróquia Nossa Senhora Da Glória"
        />
        <div className="header-search">
          <img src={instagram} alt="Instagram" />
        </div>
      </Header>

      <SideBar id="sidebar">
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
      </SideBar>

      <Content id="content">
        <section id="section1">
          <h2>Section 1</h2>
          <p>Conteúdo da Seção 1</p>
        </section>
        <section id="section2">
          <h2>Section 2</h2>
          <p>Conteúdo da Seção 2</p>
        </section>
        <section id="section3">
          <h2>Section 3</h2>
          <p>Conteúdo da Seção 3</p>
        </section>
      </Content>
    </>
  );
}

export default App;
