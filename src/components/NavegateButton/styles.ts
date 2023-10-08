import styled from "styled-components";

export const Button = styled.button`

  text-decoration: none;
  background: #ffff;
  text-align: center;
  width: 60%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: 700;
  padding: 0.8rem 0.8rem;
  border-radius: 10px;
  box-shadow: 10px 10px rgba(0,0,0,0.75);
  transition: all 0.2s;

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