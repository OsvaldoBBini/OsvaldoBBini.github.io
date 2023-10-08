import styled from "styled-components";

interface IProgressButton {
  selected?: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
`

export const ProgressButton = styled.a<IProgressButton>`
  width: 1.2rem; 
  height: 1.2rem; 
  background-color: ${({ theme, selected }) => selected ? theme.colors.primary.lighter : theme.colors.gray[100]}; 
  border-radius: 50%;
`