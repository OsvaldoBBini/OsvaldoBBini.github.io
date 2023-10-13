import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const HeaderContainer = styled.div`

  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 1rem;

  h1 {
    font-size: 1.5rem;
    text-shadow: 8px 8px rgba(0,0,0,0.75);
    margin-bottom: 1rem;
  }

  p {
    text-shadow: 5px 5px rgba(0,0,0,0.75);
  }

`

export const TimeLineContainer = styled.div`

  padding: 3rem 1rem;

  display: grid;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(8, 1fr);

  .back {
    grid-column-start: 10;
    grid-column-end: 11;
    grid-row-start: 9;
    grid-row-end: 9;
  }

  .foward {
    grid-column-start: 11;
    grid-column-end: 12;
    grid-row-start: 9;
    grid-row-end: 9;
  }

`