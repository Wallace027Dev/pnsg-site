import styled from 'styled-components';

export const Container = styled.div`
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
