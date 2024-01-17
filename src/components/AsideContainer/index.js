import React from 'react';
import Container from './styles';
import PropTypes from 'prop-types';

import instagram from '../../assets/icons/instagram.svg';

const VideoContainer = () => (
  <video controls preload="none">
    Desculpe, mas algo de errado aconteceu com seu vídeo
  </video>
);

const VideoText = ({ title, description }) => (
  <div className="video-text">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

const InstagramShortcut = ({ instagramLink }) => (
  <a href={instagramLink} target="_blank" rel="noopener noreferrer">
    <img src={instagram} alt="Instagram Shortcut" />
  </a>
);

const ButtonLink = ({ buttonLink }) => (
  <a href={buttonLink} target="_blank" rel="noopener noreferrer">
    <button>Ler a meditação</button>
  </a>
);

function AsideContainer({ title, description, instagramLink, buttonLink }) {
  return (
    <Container>
      <VideoContainer />
      <div className="video-description">
        <VideoText title={title} description={description} />
        <div className="video-shortcuts">
          {buttonLink && <ButtonLink buttonLink={buttonLink} />}
          {instagramLink && <InstagramShortcut instagramLink={instagramLink} />}
        </div>
      </div>
    </Container>
  );
}

AsideContainer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  instagramLink: PropTypes.string,
  buttonLink: PropTypes.string,
};

export default AsideContainer;
