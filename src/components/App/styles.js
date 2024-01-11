import styled from 'styled-components';
import '@splidejs/react-splide/css';

export const Container = styled.div`
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
