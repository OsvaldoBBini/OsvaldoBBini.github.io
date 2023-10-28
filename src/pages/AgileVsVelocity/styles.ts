import styled from "styled-components";

interface ITextContainer {
  rowStart: number,
  rowEnd: number,
  columnStart: number,
  columnEnd: number
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  column-gap: 1rem;
`

export const Grid = styled.div` 
  display: grid;
  column-gap: 1rem;
  row-gap: 1.5rem;
  grid-template-columns: repeat(3, 25rem);
  grid-template-rows: repeat(4, 8rem);
`

export const TextContainer = styled.div<ITextContainer>`

  grid-column-start: ${({columnStart}) => columnStart};
  grid-column-end: ${({columnEnd}) => columnEnd};

  grid-row-start: ${({rowStart}) => rowStart};
  grid-row-end: ${({rowEnd}) => rowEnd};

  h2 {
    margin-bottom: 1rem;
  }

`