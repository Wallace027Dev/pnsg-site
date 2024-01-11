import React from 'react';
import Container from './styles';
import PropTypes from 'prop-types';

import instagram from '../../assets/icons/instagram.svg';

const VideoErrorMessage = () => (
  <video controls height={260} width={469} preload="none">
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
      <VideoErrorMessage />
      <div>
        <VideoText title={title} description={description} />
        <div className="video-shortcuts">
          {instagramLink && <InstagramShortcut instagramLink={instagramLink} />}
          {buttonLink && <ButtonLink buttonLink={buttonLink} />}
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
