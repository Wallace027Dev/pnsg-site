import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function ImageSlider({ images, width, height, interval, autoplay }) {
  const sliderOptions = {
    autoplay: autoplay || true,
    perPage: 1,
    interval: interval || 2500,
    arrows: false,
    height: height || 450,
    width: width || 1320,
    type: 'loop',
  };

  return (
    <Splide options={sliderOptions}>
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <a href={`http://`} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={`Destaque ${index + 1}`} />
          </a>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default ImageSlider;
