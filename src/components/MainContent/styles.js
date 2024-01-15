import styled from 'styled-components';

const Container = styled.div`
  main {
    margin-left: 0;
    transition: margin-left 0.5s;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }
  }

  > section {
    width: 800px;
  }

  aside {
    width: 470px;
  }
`;

export default Container;
