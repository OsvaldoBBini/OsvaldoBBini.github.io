import styled from "styled-components";

interface IContainer {
  griddirections: {
    columnStart: number,
    columnEnd: number,
    rowStart: number,
    rowEnd: number,
  }
  direction: string
}

export const Container = styled.div<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({direction}) => direction};

  row-gap: ${({direction}) => direction === 'column' ? '0.5rem' : '0'};
  column-gap: ${({direction}) => direction === 'row' ? '0.5rem' : '0'};

  grid-column-start: ${({griddirections}) => griddirections.columnStart};
  grid-column-end: ${({griddirections}) => griddirections.columnEnd};
  grid-row-start: ${({griddirections}) => griddirections.rowStart};
  grid-row-end: ${({griddirections}) => griddirections.rowEnd};
`
export const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: #ffffff;
  border-radius: 50%
`
