import styled from "styled-components"

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
  padding: 0.5rem;
  font-size: 1.4rem;
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