import Container from './styles';

import imagesForSlider from '../../mocks/highlightsSlider';
import booksIndication from '../../mocks/booksIndication';
import filmsIndication from '../../mocks/filmsIndication';

import ImageSlider from '../ImageSlider';
import SectionSeparator from '../SectionSeparator';
import Image from '../Image';
import Video from '../Video';

import historiaDaIgreja from '../../assets/videos/historiaDaIgreja.mp4';

function MainContent({ isContentBlurred }) {
  const mainSlider = {
    width: '100%',
  };

  const indicationSlider = {
    width: '117px',
  };

  return (
    <Container className={isContentBlurred ? 'blur' : ''}>
      <ImageSlider
        images={imagesForSlider}
        imageStyles={mainSlider}
        interval={2500}
        arrows={false}
      />

      <main>
        <section id="artigos-e-noticias">
          <SectionSeparator sectionName="ARTIGOS E NOTÍCIAS" />
          <div className="posts">
            <Image />
          </div>
        </section>

        <aside id="homilias">
          <SectionSeparator sectionName="HOMILIAS" />
          <div className="posts">
            <Video
              videoArchive={historiaDaIgreja}
              title="Nome da Homilia"
              description="Descrição da Homilia"
              instagramLink="link para o instagram"
              buttonLink="link para outra página"
            />
          </div>
        </aside>
      </main>

      <SectionSeparator
        id="indicacao-de-livros"
        sectionName="INDICAÇÃO DE LIVROS"
      />
      <ImageSlider
        images={booksIndication}
        imageStyles={indicationSlider}
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
        imageStyles={indicationSlider}
        interval={1500}
        arrows={true}
        perPage={filmsIndication.length >= 5 ? 5 : filmsIndication.length}
      />
    </Container>
  );
}

export default MainContent;
