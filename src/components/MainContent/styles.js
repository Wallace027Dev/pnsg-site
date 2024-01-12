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
`;

export default Container;
