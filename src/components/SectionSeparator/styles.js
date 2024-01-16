import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  span {
    display: flex;
    h1 {
      color: var(--primary);
      font-size: 16px;
    }

    img {
      height: 16px;
    }
  }

  hr {
    color: var(--tertiary);
    margin: 10px 0 30px 0;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    max-width: 425px;
  }

  @media only screen and (max-width: 425px) {
    max-width: 300px;
  }
`;

export default Container;
