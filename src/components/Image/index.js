import PropTypes from 'prop-types';

import Container from './styles';
import articleAndNotices from '../../mocks/articlesAndNotices';

function Image() {
  return articleAndNotices.map((post) => (
    <Container href={post.link} target="_blank" rel="noopener noreferrer">
      <img src={post.image} alt={`Artigo sobre ${post.title}`} />
      <div>
        <div>
          <strong>{post.type}</strong>
          <span> | {post.data}</span>
        </div>
        <div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      </div>
    </Container>
  ));
}

Image.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Image;
