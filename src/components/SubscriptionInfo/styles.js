import styled from 'styled-components';

export const Container = styled.form`
  max-width: 400px;
  display: flex;
  flex-direction: column;

  label {
    margin-top: 8px;
  }

  input,
  select {
    height: 32px;
    padding: 4px;
  }

  button {
    margin: 16px;
    height: 48px;
    border-radius: 24px;
  }
`;
