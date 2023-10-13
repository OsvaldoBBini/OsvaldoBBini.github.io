import styled from "styled-components";

interface IContainer {
  griddirections: {
    columnStart: number,
    columnEnd: number,
    rowStart: number,
    rowEnd: number,
  }
}

interface ICircle {
  side: string
}

export const Container = styled.div<IContainer>`
  grid-column-start: ${({griddirections}) => griddirections.columnStart};
  grid-column-end: ${({griddirections}) => griddirections.columnEnd};
  grid-row-start: ${({griddirections}) => griddirections.rowStart};
  grid-row-end: ${({griddirections}) => griddirections.rowEnd};
`

export const CircleV = styled.div`
  row-gap: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const CircleH = styled.div<ICircle>`
  margin-top: 0.6rem;
  margin-right: 0.1rem;
  margin-left: 0.1rem;
  column-gap: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: ${({side}) => side === 'right'? 'flex-end': 'flex-start'};
`

export const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: #ffffff;
  border-radius: 50%
`
