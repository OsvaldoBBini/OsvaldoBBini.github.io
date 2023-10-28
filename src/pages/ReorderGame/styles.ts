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
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  column-gap: 1rem;
`

export const MenuContainer = styled.div`

  display: flex;
  flex-direction: column;
  width: 60%;
  row-gap: 1rem;

`

export const TextContainer = styled.div` 
  display: flex;
  flex-direction: column;

  row-gap: 1rem;
  padding: 1rem;

  background: #f5f5dc;
  color: #000000;
  box-shadow: 10px 10px rgba(0,0,0,0.75);
  
  border-bottom: 3px dashed #000000;

  ul {
    padding: 0.5rem 1rem;
  }

`

export const ListContainer = styled.div`

  background: #f5f5dc;
  color: #000000;
  box-shadow: 10px 10px rgba(0,0,0,0.75);

  padding: 1rem;

  ul {
    border: 2px dashed #000000;
    padding: 1rem;
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

export const Button = styled.button`

  text-decoration: none;
  background: #ffff;
  cursor: pointer;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 10px;
  box-shadow: 10px 10px rgba(0,0,0,0.75);
  transition: all 0.2s;
  border: none;
  padding: 3px;
  font-size: 2rem;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.lighter};
    transform: translate(-10px, -10px);
    box-shadow: 15px 15px rgba(0,0,0,0.75);
  }

  &:active {
    transform: translate(0px, 0px);
    box-shadow: 10px 10px rgba(0,0,0,0.75);
  }

`