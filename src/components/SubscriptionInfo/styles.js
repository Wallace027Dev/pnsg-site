import styled from 'styled-components';

export const Container = styled.form`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  padding: 24px;
  border-radius: 6px;
  margin: 0 16px;

  h2 {
    color: var(--primary);
    font-weight: 700;
  }

  label {
    margin-top: 8px;
    color: var(--primary);
  }

  input,
  select {
    width: 100%;
    height: 32px;
    padding: 4px;
    border: none;
    background: var(--bg);
    border-radius: 4px;
    &:focus {
      font-weight: 700;
    }
  }

  button {
    margin-top: 16px;
    height: 48px;
    border-radius: 24px;
    border: none;
    background-color: var(--primary);
    color: var(--bg);
    font-weight: 700;
    font-size: 16px;
    transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  }

  @media screen and (min-width: 768px) {
    button:hover {
      background-color: var(--secondary);
      color: var(--primary);
      border: 4px solid var(--bg);
      cursor: pointer;
    }
  }
`;
