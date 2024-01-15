import logo from '../../assets/images/logo.svg';

import Container from './styles';

import imagesForSlider from '../../mocks/highlightsSlider';
import booksIndication from '../../mocks/booksIndication';
import filmsIndication from '../../mocks/filmsIndication';

import ImageSlider from '../ImageSlider';
import SectionSeparator from '../SectionSeparator';
import ArticleContainer from '../ArticleContainer';
import AsideContainer from '../AsideContainer';

function MainContent({ isContentBlurred }) {
  return (
    <Container className={isContentBlurred ? 'blur' : ''}>
      <ImageSlider
        className="main-slider"
        images={imagesForSlider}
        imageHeight="450px"
        imageWidth="1320px"
        sliderHeight={450}
        interval={2500}
        arrows={false}
      />

      <main>
        <section id="artigos-e-noticias">
          <SectionSeparator
            id="artigos-e-noticias"
            sectionName="ARTIGOS E NOTÍCIAS"
          />
          <ArticleContainer
            type="Nome do tipo"
            image={logo}
            data="01.01.0001"
            title="Nome do Artigo"
            description="Descrição do artigo"
          />
        </section>

        <aside id="homilias">
          <SectionSeparator sectionName="HOMILIAS" />
          <AsideContainer
            title="Nome da Homilia"
            description="Descrição da Homilia"
            instagramLink="link para o instagram"
            buttonLink="link para outra página"
          />
        </aside>
      </main>

      <SectionSeparator
        id="indicacao-de-livros"
        sectionName="INDICAÇÃO DE LIVROS"
      />
      <ImageSlider
        images={booksIndication}
        imageHeight="175px"
        imageWidth="117px"
        sliderHeight={175}
        interval={1500}
        arrows={true}
        perPage={booksIndication.length >= 5 ? 5 : booksIndication.length}
      />

      <SectionSeparator
        id="indicacao-de-filmes"
        sectionName="INDICAÇÃO DE FILMES"
      />
      <ImageSlider
        images={filmsIndication}
        imageHeight="175px"
        imageWidth="117px"
        sliderHeight={175}
        interval={1500}
        arrows={true}
        perPage={filmsIndication.length >= 5 ? 5 : filmsIndication.length}
      />
    </Container>
  );
}

export default MainContent;
