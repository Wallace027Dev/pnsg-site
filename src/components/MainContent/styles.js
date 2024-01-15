import styled from 'styled-components';

const Container = styled.div`
  padding: 0 95px;
  main {
    margin-left: 0;
    transition: margin-left 0.5s;
    display: flex;
    justify-content: space-between;
  }

  > section {
    width: 800px;
  }

  aside {
    width: 470px;
  }

  img {
    .main-slider {
      width: 100%;
      height: 450px;
      object-fit: cover;

      @media only screen and (max-width: 425px) {
        height: 250px;
      }

      @media only screen and (max-width: 768px) {
        height: 300px;
      }

      @media only screen and (max-width: 1024px) {
        height: 375px;
      }
    }
  }

  li {
    text-align: center;
  }
`;

export default Container;
