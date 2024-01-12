import { useState } from 'react';

import Header from '../Header';
import SideBar from '../SideBar';
import ArticleContainer from '../ArticleContainer';
import AsideContainer from '../AsideContainer';
import ImageSlider from '../ImageSlider';

import ImageSliderContainer from '../ImageSlider/styles';
import { Container, Content, Footer } from './styles';

import ellipsis from '../../assets/icons/ellipsis.svg';
import logo from '../../assets/images/logo.svg';

import imagesForSlider from '../../mocks/highlightsSlider';
import booksIndication from '../../mocks/booksIndication';
import filmsIndication from '../../mocks/filmsIndication';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isContentBlurred, setContentBlurred] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen);
    setContentBlurred(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setSidebarOpen(false);
    setContentBlurred(false);
  };

  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      <SideBar isOpen={isSidebarOpen} onLinkClick={handleLinkClick} />

      <Container className={isContentBlurred ? 'blur' : ''}>
        <ImageSliderContainer imageWidth="1320px" imageHeight="450px">
          <ImageSlider
            images={imagesForSlider}
            height={450}
            width={1320}
            interval={2500}
            arrows={false}
          />
        </ImageSliderContainer>
        <Content>
          <main>
            <section>
              <div className="title-section">
                <img src={ellipsis} alt="Ellipsis Menu" />
                <h1>ARTIGOS E NOTÍCIAS</h1>
              </div>
              <hr />
              <ArticleContainer
                type="Nome do tipo"
                image={logo}
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
              <AsideContainer
                title="Nome da Homilia"
                description="Descrição da Homilia"
                instagramLink="link para o instagram"
                buttonLink="link para outra página"
              />
            </aside>
          </main>
          <ImageSliderContainer imageHeight="250px" imageWidth="170px">
            <ImageSlider
              images={booksIndication}
              height={250}
              interval={2500}
              arrows={true}
              perPage={booksIndication.length >= 5 ? 5 : booksIndication.length}
            />
          </ImageSliderContainer>
          <ImageSliderContainer imageHeight="250px" imageWidth="170px">
            <ImageSlider
              images={filmsIndication}
              height={250}
              interval={2500}
              arrows={true}
              perPage={filmsIndication.length >= 5 ? 5 : filmsIndication.length}
            />
          </ImageSliderContainer>
        </Content>
      </Container>

      <Footer>
        <div className="footer-container">
          <section>
            <div>
              <h1>ASSUNTO 1</h1>
              <a href="/">Opção 1</a>
              <a href="/">Opção 2</a>
              <a href="/">Opção 3</a>
              <a href="/">Opção 4</a>
            </div>
            <div>
              <h1>ASSUNTO 2</h1>
              <a href="/">Opção 1</a>
              <a href="/">Opção 2</a>
              <a href="/">Opção 3</a>
              <a href="/">Opção 4</a>
              <a href="/">Opção 5</a>
              <a href="/">Opção 6</a>
            </div>
            <div>
              <h1>ASSUNTO 3</h1>
              <a href="/">Opção 1</a>
              <a href="/">Opção 2</a>
              <a href="/">Opção 3</a>
              <a href="/">Opção 4</a>
              <a href="/">Opção 5</a>
            </div>
          </section>

          <div>
            <h1>REDES</h1>
            <a href="/">Rede 1</a>
            <a href="/">Rede 2</a>
            <a href="/">Rede 3</a>
          </div>
        </div>

        <hr />

        <div className="footer-logo">
          <img src={logo} alt="Paróquia Nossa Senhora da Glória Horizontal" />
          <h1>Paróquia Nossa Senhora da Glória</h1>
          <p>"Nossa senhora da Glória, rogai por nós"</p>
        </div>
      </Footer>
    </>
  );
}

export default App;
