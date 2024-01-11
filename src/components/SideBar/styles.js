import styled from 'styled-components';

const Container = styled.div`
  margin-top: 55px;
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: var(--bg);
  opacity: 0.9;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  box-shadow: 2px 0 5px var(--tertiary);

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

  @media only screen and (max-width: 425px) {
    margin-top: 40px;
  }
`;

export default Container;
