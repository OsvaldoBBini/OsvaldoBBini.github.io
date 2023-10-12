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
  align-items: center;
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

  padding: 1rem 1rem;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);

  .back {
    grid-column-start: 7;
    grid-column-end: 8;
    grid-row-start: 9;
    grid-row-end: 9;
  }

  .foward {
    grid-column-start: 8;
    grid-column-end: 9;
    grid-row-start: 9;
    grid-row-end: 9;
  }

`