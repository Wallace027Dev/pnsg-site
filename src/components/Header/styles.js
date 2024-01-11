import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 1000;
  background: var(--primary);
  height: 55px;
  padding: 0 100px;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1320px;
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
      left: 50%;
    }

    .instagram-img {
      img {
        height: 28px;
      }

      :hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }

  &.scrolled {
    background: var(--bg);
    opacity: 0.95;
    transition: 0.3s ease;
  }
`;

export default Container;
