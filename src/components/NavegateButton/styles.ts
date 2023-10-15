import styled, {keyframes} from "styled-components";

const createButton = keyframes`
  to {
    padding: 0.8rem 0.8rem;
  }
`

export const Button = styled.button`

  border-radius: 10px;
  text-decoration: none;
  background: #ffff;
  cursor: pointer;
  animation: ${createButton} 0.8s linear forwards;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 10px;
  box-shadow: 10px 10px rgba(0,0,0,0.75);
  transition: all 0.2s;
  border: none;
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