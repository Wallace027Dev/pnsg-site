/* import {
  ArticleContainer,
  Container,
  Content,
  SlideMain,
  HomiliaVideo,
  SlideIndicationsContainer,
  Footer,
} from './styles';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import ellipsis from '../../assets/icons/ellipsis.svg';
import instagram from '../../assets/icons/instagram.svg';

import logo from '../../assets/images/logo.svg';
import destaque1 from '../../assets/images/destaque1.jpg';
import destaque2 from '../../assets/images/destaque2.jpg';
import destaque3 from '../../assets/images/destaque3.jpg'; */
import Header from '../Header';
import SideBar from '../SideBar';

function App() {
  document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /*   const booksIndication = [
    {
      slideTitle: 'INDICAÇÃO DE LIVROS',
      books: [
        {
          name: 'Imitação de Cristo',
          link: 'https://www.amazon.com.br/Imita%C3%A7%C3%A3o-Cristo-Tom%C3%A1s-Kempis/dp/8594318820',
          photo:
            'https://m.media-amazon.com/images/I/71hz619E6aL._AC_UF1000,1000_QL80_.jpg',
        },
        {
          name: 'Confissões',
          link: 'https://www.amazon.com.br/Confiss%C3%B5es-Santo-Agostinho/dp/859431891X/ref=pd_bxgy_img_d_sccl_1/130-6092821-8984424?pd_rd_w=zkaFM&content-id=amzn1.sym.758f3509-df88-4265-806c-565a738dc05d&pf_rd_p=758f3509-df88-4265-806c-565a738dc05d&pf_rd_r=D3Z9CC2FWM1619RGZ86B&pd_rd_wg=ECrE1&pd_rd_r=360e98b5-2390-423f-8fd3-41714ff79a47&pd_rd_i=859431891X&psc=1',
          photo: 'https://m.media-amazon.com/images/I/71VQR8rTBXL._SY466_.jpg',
        },
        {
          name: 'O Homem Eterno',
          link: 'https://www.amazon.com.br/homem-eterno-G-K-Chesterton/dp/6555521686/ref=pd_bxgy_img_d_sccl_1/130-6092821-8984424?pd_rd_w=pWMop&content-id=amzn1.sym.758f3509-df88-4265-806c-565a738dc05d&pf_rd_p=758f3509-df88-4265-806c-565a738dc05d&pf_rd_r=R933KM3PSDX7TRJ7FDVZ&pd_rd_wg=NWhpA&pd_rd_r=b5f39cdb-4382-44fa-88f2-16c3b8d271fa&pd_rd_i=6555521686&psc=1',
          photo: 'https://m.media-amazon.com/images/I/71fG3yWsyML._SY466_.jpg',
        },
        {
          name: 'Ortodoxia',
          link: 'https://www.amazon.com.br/Ortodoxia-G-K-Chersterton/dp/8594318928/ref=pd_bxgy_img_d_sccl_1/130-6092821-8984424?pd_rd_w=KXVeF&content-id=amzn1.sym.758f3509-df88-4265-806c-565a738dc05d&pf_rd_p=758f3509-df88-4265-806c-565a738dc05d&pf_rd_r=BTATQ7T0V7KK4057MRPC&pd_rd_wg=Pe9Vh&pd_rd_r=18d4a8b9-6abe-4bb8-97cd-e7bfc3f8dd04&pd_rd_i=8594318928&psc=1',
          photo: 'https://m.media-amazon.com/images/I/71sz0YXsZGL._SY466_.jpg',
        },
      ],
    },
  ];

  const filmsIndication = [
    {
      slideTitle: 'INDICAÇÃO DE FILMES',
      films: [
        {
          name: 'A Paixão de Cristo',
          link: 'https://www.starplus.com/pt-br/movies/a-paixao-de-cristo/3yap94iqersK',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToM39JuAQDKksB7CKrgScA-Sh6Ct6Lcxk_N71nCQZcG7xGqKYD',
        },
      ],
    },
  ];

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

  function SlideIndications({ indicationMap, slideTitle }) {
    return (
      <SlideIndicationsContainer>
        <div className="title-section">
          <img src={ellipsis} alt="Ellipsis" />
          <h1>{slideTitle}</h1>
        </div>
        <Splide
          options={{
            autoplay: true,
            perPage: 4,
            interval: 2500,
            arrows: true,
            height: 250,
            width: 1320,
            type: 'loop',
          }}
        >
          {indicationMap.map((book, index) => (
            <SplideSlide key={index + 1}>
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <img src={book.photo} alt={book.name} />
                <h1>{book.name}</h1>
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </SlideIndicationsContainer>
    );
  } */

  return (
    <>
      <Header />
      <SideBar />

      {/* <Container id="content">
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
          {booksIndication.map((indication, index) => (
            <SlideIndications
              key={index}
              indicationMap={indication.books}
              slideTitle={indication.slideTitle}
            />
          ))}
          {filmsIndication.map((indication, index) => (
            <SlideIndications
              key={index}
              indicationMap={indication.films}
              slideTitle={indication.slideTitle}
            />
          ))}
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
      </Footer> */}
    </>
  );
}

export default App;
