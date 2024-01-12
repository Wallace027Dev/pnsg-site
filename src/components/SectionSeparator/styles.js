import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: var(--primary);
    font-size: 16px;
  }

  img {
    height: 16px;
  }

  hr {
    color: var(--tertiary);
    margin: 10px 0 30px 0;
  }
`;

export default Container;
