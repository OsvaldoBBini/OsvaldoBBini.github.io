import styled from "styled-components";

export const Container = styled.div`

  display: grid;

  grid-template-columns: repeat(12, 5rem);
  grid-template-rows: repeat(4, 5rem);
  column-gap: 1rem;
  row-gap: 1rem;

  div {
    padding: 1rem;
    height: 5rem;
    background: ${({ theme }) => theme.colors.success.main};
    /* box-shadow: 10px 10px rgba(0,0,0,0.75); */
  }

`