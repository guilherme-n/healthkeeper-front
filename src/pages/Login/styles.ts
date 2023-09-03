import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  /* align-items: center; */

  height: 100vh;
  margin: auto;

  max-width: 300px;

  input {
    padding-left: 0.75rem;
  }

  button {
    margin-top: 2rem;
  }
`;
