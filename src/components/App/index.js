import { useState } from 'react';

import ArticleContainer from '../ArticleContainer';
import AsideContainer from '../AsideContainer';
import Header from '../Header';
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';
import SideBar from '../SideBar';
import SectionSeparator from '../SectionSeparator';

import { Container, Content } from './styles';
import ImageSliderContainer from '../ImageSlider/styles';

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
              <SectionSeparator sectionName="ARTIGOS E NOTÍCIAS" />
              <ArticleContainer
                type="Nome do tipo"
                image={logo}
                data="01.01.0001"
                title="Nome do Artigo"
                description="Descrição do artigo"
              />
            </section>

            <aside>
              <SectionSeparator sectionName="HOMILIAS" />
              <AsideContainer
                title="Nome da Homilia"
                description="Descrição da Homilia"
                instagramLink="link para o instagram"
                buttonLink="link para outra página"
              />
            </aside>
          </main>

          <SectionSeparator sectionName="INDICAÇÃO DE LIVROS" />
          <ImageSliderContainer imageHeight="175px" imageWidth="117px">
            <ImageSlider
              images={booksIndication}
              height={175}
              interval={1500}
              arrows={true}
              perPage={booksIndication.length >= 5 ? 5 : booksIndication.length}
            />
          </ImageSliderContainer>

          <SectionSeparator sectionName="INDICAÇÃO DE FILMES" />
          <ImageSliderContainer imageHeight="175px" imageWidth="117px">
            <ImageSlider
              images={filmsIndication}
              height={175}
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
