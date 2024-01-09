import {
  ArticleContainer,
  Container,
  Content,
  SlideMain,
  Header,
  HomiliaVideo,
  SideBar,
  SlideBooks,
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

  function Article({ link, type, data, title, description }) {
    return (
      <ArticleContainer href={link} target="_blank" rel="noopener noreferrer">
        <img src={destaque1} alt="Artigo tal" />
        <div>
          <div>
            <strong>{type}</strong>
            <span> | {data}</span>
          </div>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </ArticleContainer>
    );
  }

  function Homilia({ title, description, instagramLink, buttonLink }) {
    return (
      <HomiliaVideo>
        <video controls height={260} width={469} preload="none">
          Desculpe, mas algo de errado aconteceu com seu vídeo
        </video>
        <div>
          <div className="video-text">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="video-shortcuts">
            {instagramLink ? (
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram Shortcut" />
              </a>
            ) : null}
            {buttonLink ? (
              <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                <button>Ler a meditação</button>
              </a>
            ) : null}
          </div>
        </div>
      </HomiliaVideo>
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

      <Container id="content">
        <SlideMain>
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
        </SlideMain>

        <Content>
          <main>
            <section>
              <div className="title-section">
                <img src={ellipsis} alt="Ellipsis Menu" />
                <h1>ARTIGOS E NOTÍCIAS</h1>
              </div>
              <hr />
              <Article
                type="Nome do tipo"
                data="01.01.0001"
                title="Nome do Artigo"
                description="Descrição do artigo"
              />
            </section>

            <aside>
              <div className="title-section">
                <img src={ellipsis} alt="Ellipsis Menu" />
                <h1>HOMILIAS</h1>
              </div>
              <hr />
              <Homilia
                title="Nome da Homilia"
                description="Descrição da Homilia"
                instagramLink="link para o instagram"
                buttonLink="link para outra página"
              />
            </aside>
          </main>
          <SlideBooks>
            <div className="title-section">
              <img src={ellipsis} alt="Ellipsis" />
              <h1>INDICAÇÃO DE LIVROS</h1>
            </div>
            <Splide
              options={{
                autoplay: true,
                perPage: 3,
                interval: 2500,
                arrows: true,
                height: 240,
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
          </SlideBooks>
        </Content>
      </Container>
    </>
  );
}

export default App;
