import styled, {keyframes} from "styled-components";

const increaseOpacity = keyframes`
to {
  opacity: 1;
}
`

interface IButtonContainer {
  rowStart: number,
  columnStart: number
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
  column-gap: 2rem;
`

export const MenuContainer = styled.div`

  display: flex;

  margin-bottom: 1rem;
  height: 100%;

  justify-content: center;
  align-items: center;

  column-gap: 2rem;
`

export const InstructionsContainer = styled.div` 
  display: flex;
  padding: 1rem;

  width: 55%;

  background: #f5f5dc;
  color: #000000;
  box-shadow: 10px 10px rgba(0,0,0,0.75);
  
  border-bottom: 3px dashed #000000;

  ul {
    padding: 0.5rem 1rem;
  }

`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1rem;
  }

  ul {
    font-size: 1rem;
  }
`

export const ListContainer = styled.div`
  background: #f5f5dc;
  color: #000000;
  box-shadow: 10px 10px rgba(0,0,0,0.75);
  width: 45%;
  padding: 1rem;
  max-height: 80%;
  overflow-y: scroll;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  ul {
    max-height: 80%;
    border: 2px dashed #000000;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  li {
    list-style: none;
    margin-bottom: 10px;
    width: 100%;
    padding: 1rem 1.2rem;;
    border-bottom: 2px dashed #000000;
    cursor: grab;
    display: flex;
    justify-content: space-between;
    opacity: 0;
    animation: ${increaseOpacity} 0.5s linear forwards;

    button {
      background: transparent;
      border: none;
      color: red;
    }
  }
`

export const GridIcons = styled.div` 
  flex: 2;
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template-columns: repeat(10, 1f);
  grid-template-rows: repeat(10, 1f);
`


export const ButtonContainer = styled.div<IButtonContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column-start: ${({ columnStart }) => columnStart};
  grid-row-start: ${({ rowStart }) => rowStart};
`