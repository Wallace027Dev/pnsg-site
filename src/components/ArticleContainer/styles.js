import styled from 'styled-components';

const Container = styled.a`
  display: flex;
  text-decoration: none;

  img {
    width: 300px;
    height: 180px;
    object-fit: cover;
    margin-right: 25px;
    border-radius: 2.5px;
    transition: filter 0.6s ease;

    &:hover {
      cursor: pointer;
      filter: brightness(50%);
    }
  }

  strong {
    font-size: 12px;
    font-weight: 700;
    color: var(--secondary);
  }

  span {
    font-size: 12px;
    color: var(--tertiary);
    word-spacing: 5px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary);
    margin: 12px 0;
    transition: color 0.4s ease;

    &:hover {
      cursor: pointer;
      color: var(--red);
    }
  }

  p {
    font-size: 16px;
    color: var(--tertiary);
  }

  @media only screen and (min-width: 768px) {
    img:hover {
      filter: brightness(50%);
    }

    h1:hover {
      color: var(--red);
    }
  }
`;

export default Container;
