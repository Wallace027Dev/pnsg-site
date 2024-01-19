import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 48px auto;
  width: 100%;
  max-width: 1440px;

  img {
    width: ${(props) => props.imageWidth || '1440px'};
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
