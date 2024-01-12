import { useState } from 'react';

import Header from '../Header';
import SideBar from '../SideBar';
import ArticleContainer from '../ArticleContainer';
import AsideContainer from '../AsideContainer';
import ImageSlider from '../ImageSlider';

import ImageSliderContainer from '../ImageSlider/styles';
import { Container, Content } from './styles';

import ellipsis from '../../assets/icons/ellipsis.svg';
import logo from '../../assets/images/logo.svg';

import imagesForSlider from '../../mocks/highlightsSlider';
import booksIndication from '../../mocks/booksIndication';
import filmsIndication from '../../mocks/filmsIndication';
import Footer from '../Footer';

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
          <div className="title-section">
            <img src={ellipsis} alt="Ellipsis Menu" />
            <h1>INDICAÇÃO DE LIVROS</h1>
          </div>
          <hr />
          <ImageSliderContainer imageHeight="150px" imageWidth="120px">
            <ImageSlider
              images={booksIndication}
              height={150}
              interval={1500}
              arrows={true}
              perPage={booksIndication.length >= 5 ? 5 : booksIndication.length}
            />
          </ImageSliderContainer>
          <div className="title-section">
            <img src={ellipsis} alt="Ellipsis Menu" />
            <h1>INDICAÇÃO DE FILMES</h1>
          </div>
          <hr />
          <ImageSliderContainer imageHeight="150px" imageWidth="120px">
            <ImageSlider
              images={filmsIndication}
              height={150}
              interval={1500}
              arrows={true}
              perPage={filmsIndication.length >= 5 ? 5 : filmsIndication.length}
            />
          </ImageSliderContainer>
        </Content>
      </Container>

      <Footer />
    </>
  );
}

export default App;
