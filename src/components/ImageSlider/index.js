import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function ImageSlider({ images, width, height, interval, perPage, arrows }) {
  const sliderOptions = {
    autoplay: true,
    arrows: arrows,
    perPage: perPage || 1,
    interval: interval || 2500,
    height: height || 450,
    width: width || 1320,
    type: 'loop',
  };

  return (
    <Splide options={sliderOptions}>
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img src={image.photo} alt={`Destaque ${image.name}`} />
          </a>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default ImageSlider;
