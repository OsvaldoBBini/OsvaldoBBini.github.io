import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 1000vh;
  position: relative;

  .instructions {
    position: fixed;
    top: 10px;
    right: 20px;
    width: 10rem;
    text-align: center;
  }
`

export const PrinciplesContainer = styled.div`

  width: 80%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  column-gap: 3rem;

  .pillar-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    max-width: 30%;
  }

  p {
    text-align: center;
  }

  img {
    width: 5rem;
    height: 5rem;
    filter: drop-shadow(5px 5px rgba(0,0,0,0.75));
  }

`

export const Grid = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(1, 1fr);
  grid-gap:1.5rem;
`