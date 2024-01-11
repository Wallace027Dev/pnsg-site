import styled from 'styled-components';
import '@splidejs/react-splide/css';

export const Container = styled.div`
  padding: 0 100px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SlideMain = styled.div`
  margin: 48px auto;

  img {
    width: 1320px;
    height: 450px;
    object-fit: cover;
  }
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

  .title-section {
    display: flex;
    align-items: center;

    h1 {
      color: var(--primary);
      font-size: 16px;
    }

    img {
      height: 16px;
    }
  }

  > section {
    width: 800px;
  }

  aside {
    width: 470px;
  }
`;

export const ArticleContainer = styled.a`
  display: flex;
  text-decoration: none;

  img {
    width: 300px;
    height: 180px;
    object-fit: cover;
    margin-right: 25px;
    border-radius: 2.5px;
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
  }

  p {
    font-size: 16px;
    color: var(--tertiary);
  }

  @media only screen and (min-width: 768px) {
    img {
      &:hover {
        cursor: pointer;
        filter: brightness(50%);
        transition: filter 0.6s ease;
      }
    }

    h1 {
      &:hover {
        cursor: pointer;
        color: var(--red);
        transition: color 0.4s ease;
      }
    }
  }
`;

export const HomiliaVideo = styled.div`
  background: var(--primary);
  width: 470px;

  .video-text {
    h1 {
      font-size: 21px;
      line-height: 16px;
      margin-bottom: 16px;
      font-weight: 700;
      color: var(--bg);
    }

    p {
      font-size: 16px;
      color: var(--tertiary);
      margin-bottom: 16px;
    }
  }

  .video-shortcuts {
    display: flex;
    justify-content: space-between;

    img {
      height: 38px;
      border-radius: 19px;
      padding: 4px;
      background: var(--tertiary);
    }

    button {
      background: var(--red);
      border: none;
      height: 35px;
      width: 150px;
      font-size: 16px;
      border-radius: 17.5px;
      color: var(--bg);
    }
  }

  > div {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media only screen and (min-width: 768px) {
    img {
      &:hover {
        cursor: pointer;
        filter: brightness(50%);
        transition: filter 0.6s ease;
      }
    }

    button {
      &:hover {
        cursor: pointer;
        background: var(--bg);
        color: var(--red);
        transition: 0.4s ease-in-out;
        letter-spacing: 0.5px;
      }
    }
  }
`;

export const SlideIndicationsContainer = styled.div`
  margin: 48px auto;
  text-align: center;

  div {
    margin: 10px 0 30px 0;
  }

  li {
    position: relative;

    a {
      overflow: hidden;

      img {
        height: 250px;
        object-fit: cover;
      }

      h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        opacity: 0;
        text-decoration: none;
        color: var(--bg);
        max-width: 100px;
      }
    }
    :hover {
      cursor: pointer;

      img {
        filter: brightness(35%);
      }

      h1 {
        opacity: 1;
        transition: opacity 1.25s ease;
      }
    }
  }
`;

export const Footer = styled.footer`
  background: var(--primary);
  width: 100%;
  padding: 140px 0;

  .footer-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1320px;
    margin: 0 auto;
  }

  section {
    display: flex;
    align-items: flex-start;
    gap: 48px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 20px;
    color: var(--bg);
    margin-bottom: 40px;
  }

  a {
    font-size: 16px;
    color: var(--font);
    text-decoration: none;

    & + a {
      margin-top: 6px;
    }
    &:hover {
      color: var(--bg);
    }
  }

  hr {
    margin: 32px auto;
    max-width: 1320px;
  }

  .footer-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--tertiary);

    img {
      height: 74px;
      margin-bottom: 12px;
    }

    h1,
    p {
      font-size: 16px;
      margin: 0;
    }
  }
`;
