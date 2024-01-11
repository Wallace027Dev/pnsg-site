import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 48px auto;

  img {
    width: ${(props) => props.imageWidth || '1320px'};
    height: ${(props) => props.imageHeight || '450px'};
    object-fit: cover;
  }

  li {
    text-align: center;
  }
`;

function ImageSliderContainer({ children, imageWidth, imageHeight }) {
  return (
    <StyledContainer imageWidth={imageWidth} imageHeight={imageHeight}>
      {children}
    </StyledContainer>
  );
}

export default ImageSliderContainer;
