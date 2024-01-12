import styled from 'styled-components';
import '@splidejs/react-splide/css';

export const Container = styled.div`
  border: red solid 1px;
  padding: 0 100px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  main {
    margin-left: 0;
    transition: margin-left 0.5s;
    display: flex;
    justify-content: space-between;
  }

  hr {
    color: var(--tertiary);
    margin: 10px 0 30px 0;

    :not(:first) {
      margin: 30px 0;
    }
  }

  > section {
    width: 800px;
  }

  aside {
    width: 470px;
  }
`;
