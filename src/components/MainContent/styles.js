import styled from 'styled-components';

const Container = styled.div`
  main {
    margin-left: 0;
    transition: margin-left 0.5s;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  > section {
    width: 800px;
  }

  aside {
    width: 470px;
  }

  .posts {
    a + a {
      margin-top: 15px;
    }
  }

  @media screen and (max-width: 1024px) {
    main {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      hr {
        width: 768px;
      }

      > section {
        display: flex;
        flex-direction: column;
        align-items: center;

        > div {
          display: flex;
        }
      }

      aside {
        width: 768px;
        margin-top: 30px;
      }
    }

    .posts {
      a + a {
        margin-top: 0px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    main {
      max-width: 425px;

      > section {
        width: 425px;

        .posts {
          display: flex;
          flex-direction: column;
          width: 300px;
        }
      }

      aside {
        width: 425px;
      }
    }
  }

  @media screen and (max-width: 425px) {
    main {
      max-width: 300px;
      > section {
        width: 300px;
      }

      aside {
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export default Container;
