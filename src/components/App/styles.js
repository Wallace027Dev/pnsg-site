import styled from 'styled-components';
import '@splidejs/react-splide/css';

export const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
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
`;
