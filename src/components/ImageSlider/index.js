import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import ImageSliderContainer from './styles';

function ImageSlider({
  images,
  sliderWidth,
  imageWidth,
  sliderHeight,
  imageHeight,
  interval,
  perPage,
  arrows,
}) {
  const sliderOptions = {
    autoplay: true,
    arrows: arrows,
    perPage: perPage || 1,
    interval: interval || 2500,
    height: sliderHeight || 450,
    width: sliderWidth || 1320,
    type: 'loop',
  };

  return (
    <ImageSliderContainer imageWidth={imageWidth} imageHeight={imageHeight}>
      <Splide options={sliderOptions}>
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.photo} alt={`Destaque ${image.name}`} />
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </ImageSliderContainer>
  );
}

export default ImageSlider;
