import styled from "styled-components";

interface IContainer {
  griddirections: {
    columnStart: number,
    columnEnd: number,
    rowStart: number,
    rowEnd: number,
  }
}

interface ITextContent {
  opacity: number;
}

export const Container = styled.div<IContainer>`
  display: flex;
  align-items: flex-start;
  column-gap: 0.6rem;
  position: relative;

  grid-column-start: ${({griddirections}) => griddirections.columnStart};
  grid-column-end: ${({griddirections}) => griddirections.columnEnd};
  grid-row-start: ${({griddirections}) => griddirections.rowStart};
  grid-row-end: ${({griddirections}) => griddirections.rowEnd};
`

export const TextTitle = styled.div`
  background: #ffff;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: 700;
  padding: 0.8rem 0.8rem;
  border-radius: 10px;
  box-shadow: 10px 10px rgba(0,0,0,0.75);

  h1 {
    text-align: center;
  }
`

export const TextContent = styled.div<ITextContent>`
  background: #ffff;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: 700;
  padding: 0.8rem 0.8rem;
  border-radius: 10px;
  box-shadow: 10px 10px rgba(0,0,0,0.75);
  opacity: ${({ opacity }) => opacity};
  width: 20rem;
  position: absolute;
  top: 6rem;
  z-index: 10;
  transition: all 0.4s ease-in;

  h1 {
    font-size: 1.6rem;
    text-align: center;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.dark};
  }

  p {
    text-align: center;
  }
`