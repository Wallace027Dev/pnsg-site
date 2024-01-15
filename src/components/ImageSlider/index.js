import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import ImageSliderContainer from './styles';

function ImageSlider({
  images,
  sliderHeight,
  interval,
  perPage,
  arrows,
  imageStyles,
}) {
  const sliderOptions = {
    autoplay: true,
    arrows: arrows,
    perPage: perPage || 1,
    interval: interval || 2500,
    height: sliderHeight || 450,
    type: 'loop',
    breakpoints: {
      1440: {
        width: 1024,
      },
      1024: {
        width: 768,
      },
      768: {
        width: 425,
      },
      425: {
        width: 300,
      },
    },
  };

  return (
    <ImageSliderContainer>
      <Splide options={sliderOptions}>
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src={image.photo}
                alt={`Destaque ${image.name}`}
                style={imageStyles}
              />
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </ImageSliderContainer>
  );
}

export default ImageSlider;
