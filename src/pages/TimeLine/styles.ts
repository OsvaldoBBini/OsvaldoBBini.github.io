import styled from "styled-components";
import waves from '../../assets/images/waves.svg'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${waves});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 0.5rem;

  .title {
    font-size: 1.5rem;
    text-shadow: 5px 5px rgba(0,0,0,0.75);
    margin-bottom: 1rem;

    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 2;
  }

  .title-text {
    text-shadow: 5px 5px rgba(0,0,0,0.75);

    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 3;
  }

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
`;

export const TextsContainer = styled.div`
  display: flex;

  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 8;
`