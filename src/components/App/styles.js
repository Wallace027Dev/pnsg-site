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
      font-size: 13px;
      font-weight: 700;
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
  padding: 16px;
`;
