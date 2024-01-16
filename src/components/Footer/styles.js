import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--primary);
  width: 100%;
  padding: 140px 0;

  .footer-container {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1320px;
    width: 100%;
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

  @media screen and (max-width: 1024px) {
    .footer-container,
    hr {
      max-width: 768px;
    }

    h1 {
      margin-bottom: 24px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 120px 0;

    .footer-container,
    hr {
      max-width: 425px;
    }

    h1 {
      margin-bottom: 12px;
    }
  }

  section {
    gap: 24px;
  }

  @media only screen and (max-width: 425px) {
    padding: 90px 0;

    .footer-container {
      flex-direction: column;
      align-items: center;

      section {
        margin-bottom: 36px;
      }
    }
  }

  section {
    gap: 24px;
  }
`;

export default Container;
