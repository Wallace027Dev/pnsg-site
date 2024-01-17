import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: var(--primary);
  height: 55px;
  transition: background 0.3s ease, opacity 0.3s ease;

  &.scrolled {
    background: var(--bg);
    opacity: 0.95;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    width: 100%;
    margin: 10px auto;

    button {
      display: flex;
      align-items: center;
      border: none;
      background: transparent;

      img {
        height: 25px;
        margin-right: 12px;
      }

      span {
        font-size: 16px;
        font-weight: 700;
        color: var(--font);
      }

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }

    .header-logo {
      height: 30px;
      position: absolute;
      left: 49.5%;
    }

    .instagram-img {
      img {
        height: 28px;
      }

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    > div {
      max-width: 768px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 20px;
    > div {
      max-width: 425px;

      button {
        img {
          margin-right: 0;
        }

        span {
          font-size: 0;
          visibility: hidden;
        }
      }

      .header-logo {
        height: 25px;
        left: 48.75%;
      }
    }
  }

  @media only screen and (max-width: 425px) {
    padding: 0 22.5px;
    height: 40px;
    > div {
      .header-logo {
        height: 25px;
        left: 47.5%;
      }
    }
  }
`;

export default Container;
