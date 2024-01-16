import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
  width: 100%;
  border: 0.1px solid var(--primary);
  border-radius: 5px;

  video {
    width: 99%;
  }

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
    .video-shortcuts img:hover {
      cursor: pointer;
      filter: brightness(50%);
      transition: filter 0.6s ease;
    }

    .video-shortcuts button:hover {
      cursor: pointer;
      background: var(--bg);
      color: var(--red);
      transition: 0.4s ease-in-out;
      letter-spacing: 0.5px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 425px;

    video {
      width: 425px;
    }
  }

  @media only screen and (max-width: 425px) {
    width: 300px;

    video {
      width: 300px;
    }
  }
`;

export default Container;
