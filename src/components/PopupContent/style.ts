import styled, { keyframes } from "styled-components";

interface IContainer {
  time: string;
  griddirections: {
    columnStart: number,
    columnEnd: number,
  }
}

interface ITextContent {
  opacity: number;
}

const leftToRight = keyframes`
  to {
    transform: translateX(0)
  }
`

export const Container = styled.div<IContainer>`
  display: flex;
  align-items: flex-start;
  column-gap: 0.6rem;
  position: relative;
  transform: translateX(-40rem);
  animation: ${leftToRight} ${({time}) => time} linear forwards;

  grid-column-start: ${({griddirections}) => griddirections.columnStart};
  grid-column-end: ${({griddirections}) => griddirections.columnEnd};
  grid-row-start: 5;
  grid-row-end: 6;
`

export const TextTitle = styled.div`

  background: #ffff;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: 700;
  align-items: center;
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
  width: 30rem;
  position: absolute;
  top: 6rem;
  left: -8rem;
  z-index: ${({ opacity }) => opacity === 1 ? 10 : -1};
  transition: all 0.4s ease-in;

  h1 {
    font-size: 1.2rem;
    text-align: center;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.dark};
  }

  p {
    text-align: center;
    font-size: 0.9rem;
  }
`