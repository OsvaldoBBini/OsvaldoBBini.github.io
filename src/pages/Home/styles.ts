import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.section`
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

export const HomeTitleContainer = styled(motion.div)`
  z-index: 10;
  width: 30%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  h1 {
    font-size: 5rem;
    text-shadow: 10px 10px rgba(0,0,0,0.75);
  }

  p {
    font-size: 1.4rem;
    text-shadow: 5px 5px rgba(0,0,0,0.75);
  }
`

export const ImageContainer = styled(motion.img)`
    width: 30rem;
    filter: drop-shadow(10px 10px rgba(0,0,0,0.75));
`
