import styled, {keyframes} from 'styled-components';

const leftToRight = keyframes`
to {
  transform: translateX(0)
}
`

const rightToRight = keyframes`
to {
  transform: translateX(0)
}
`

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ComponentsContainer = styled.div`

  width: 80%;
  display: flex;
  align-items:center;
  justify-content: center;

`

export const HomeTitleContainer = styled.div`
  z-index: 10;
  width: 30%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  transform: translateX(-40rem);
  animation: ${leftToRight} 0.6s linear forwards;

  h1 {
    font-size: 5rem;
    text-shadow: 10px 10px rgba(0,0,0,0.75);
  }

  p {
    font-size: 1.4rem;
    text-shadow: 5px 5px rgba(0,0,0,0.75);
  }
`

export const ImageContainer = styled.div`

  transform: translateX(40rem);
  animation: ${rightToRight} 0.6s linear forwards;

  img {
    width: 30rem;
    filter: drop-shadow(10px 10px rgba(0,0,0,0.75));
  }

`
