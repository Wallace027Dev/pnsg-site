import PropTypes from 'prop-types';

import Container from './styles';

function ArticleContainer({ link, image, type, data, title, description }) {
  return (
    <Container href={link} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={`Artigo sobre ${title}`} />
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
    </Container>
  );
}

ArticleContainer.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ArticleContainer;
