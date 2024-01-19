import React from 'react';
import Container from './styles';
import PropTypes from 'prop-types';

import instagram from '../../assets/icons/instagram.svg';

const VideoContainer = ({ videoArchive }) => (
  <video src={videoArchive} controls preload="none" autoPlay>
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

function Video({
  videoArchive,
  title,
  description,
  instagramLink,
  buttonLink,
}) {
  return (
    <Container>
      <VideoContainer videoArchive={videoArchive} />
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

Video.propTypes = {
  videoArchive: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  instagramLink: PropTypes.string,
  buttonLink: PropTypes.string,
};

export default Video;
