import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 48px auto;
`;

function ImageSliderContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default ImageSliderContainer;
