import styled, { keyframes } from "styled-components";

const pulseEffect = keyframes`

  100% {
    opacity: 0;
    transform: scale(2, 4);
  }

`

export const Container = styled.div`
  text-decoration: none;
  background: #ffff;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 10px;
  box-shadow: 10px 10px rgba(0,0,0,0.75);
  transition: all 0.2s;
  border: none;
  padding: 1rem;
  font-weight: 700;
  position: relative;

  /* &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index:-1;
    top: 0;
    left:0;
    background: inherit;
    border-radius: inherit;
    opacity: 0.6;
    animation: ${pulseEffect} 2s ease-out infinite;
  } */

`