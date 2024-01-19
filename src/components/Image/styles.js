import styled from 'styled-components';

const Container = styled.a`
  text-decoration: none;
  margin-bottom: 36px;
  display: flex;

  h1,
  p {
    width: 425px;
  }

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
    img {
      width: 210px;
      height: 120px;
    }

    img:hover {
      filter: brightness(50%);
    }

    h1:hover {
      color: var(--red);
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      margin-right: 0px;
      width: 120px;
      height: 85px;
    }
  }

  @media only screen and (max-width: 425px) {
    h1,
    p {
      width: 300px;
    }

    img {
      margin-bottom: 16px;
    }
  }
`;

export default Container;
