import {
  ArticleContainer,
  Container,
  Content,
  Header,
  SideBar,
  SlideContainer,
} from './styles';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import ellipsis from '../../assets/icons/ellipsis.svg';
import menu from '../../assets/icons/menu.svg';
import instagram from '../../assets/icons/instagram.svg';

import logo from '../../assets/images/logo.svg';
import destaque1 from '../../assets/images/destaque1.jpg';
import destaque2 from '../../assets/images/destaque2.jpg';
import destaque3 from '../../assets/images/destaque3.jpg';

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

  function Article(props) {
    return (
      <ArticleContainer>
        <a href="http://{props.link}" target="_blank" rel="noopener noreferrer">
          <img src={destaque1} alt="Artigo tal" />
          <div>
            <div>
              <strong>{props.type}</strong>
              <span> | {props.data}</span>
            </div>
            <div>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
            </div>
          </div>
        </a>
      </ArticleContainer>
    );
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

      <Container>
        <SlideContainer>
          <Splide
            options={{
              autoplay: true,
              perPage: 1,
              interval: 2500,
              arrows: false,
              height: 450,
              width: 1320,
              type: 'loop',
            }}
          >
            <SplideSlide>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={destaque1} alt="Destaque 1" />
              </a>
            </SplideSlide>
            <SplideSlide>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={destaque2} alt="Destaque 2" />
              </a>
            </SplideSlide>
            <SplideSlide>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={destaque3} alt="Destaque 3" />
              </a>
            </SplideSlide>
          </Splide>
        </SlideContainer>

        <Content id="content">
          <section id="section1">
            <div className="title-section">
              <img src={ellipsis} alt="Ellipsis Menu" />
              <h1>ARTIGOS E NOTÍCIAS</h1>
            </div>
            <hr />
            <Article
              type="ORAÇÃO"
              data="03.01.2024"
              title="Santo Anjo"
              description="Santo anjo do Senhor, meu zelozo guardador..."
            />
          </section>

          <aside>
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
          </aside>
        </Content>
      </Container>
    </>
  );
}

export default App;
