import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Container } from './styles';

function IndicationsSlider({ indicationMap, slideTitle }) {
  return (
    <Container>
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
    </Container>
  );
}

export default IndicationsSlider;
