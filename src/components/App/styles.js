import styled from 'styled-components';
import '@splidejs/react-splide/css';

export const Header = styled.header`
  background: var(--primary);
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;

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
  }

  .header-logo {
    height: 30px;
    position: absolute;
    left: 50%;
  }

  .header-search {
    img {
      height: 28px;
    }
  }
`;

export const Container = styled.div`
  padding: 0 100px;
`;

export const SideBar = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: var(--primary);
  opacity: 0.8;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  box-shadow: 2px 0 5px var(--primary);

  div,
  a {
    opacity: 1;
  }

  a {
    padding: 15px 10px;
    text-decoration: none;
    font-size: 18px;
    color: var(--font);
    display: block;
    transition: 0.3s;
  }

  a:hover {
    color: var(--bg);
  }

  a:focus {
    outline: none;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    background: var(--tertiary);
    color: var(--primary);
    padding: 2px 6px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }

  .nav-header {
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
      font-size: 12px;
    }
  }
`;

export const SlideContainer = styled.div`
  margin: 48px auto;

  img {
    width: 1320px;
    height: 450px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  margin-left: 0;
  transition: margin-left 0.5s;
  display: flex;
  justify-content: space-between;

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
