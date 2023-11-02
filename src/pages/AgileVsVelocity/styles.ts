import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 1000vh;
`

export const ContainerInOut = styled(motion.div)`
  width: 80%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  row-gap: 2rem;

`

export const Ball = styled(motion.div)`
  background: ${({theme}) => theme.colors.background};
  border-radius: 50px;
  z-index: 1000;
`

export const Wall = styled(motion.div)`
  background: ${({theme}) => theme.colors.background};
`

export const Target = styled(motion.div)`
  background: ${({theme}) => theme.colors.danger.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  color: #fff;
  font-size: 2rem;
`

export const AnimationContainer = styled.div`

  display: flex;
  align-items: center;
  height: 20rem;
  column-gap: 1rem;

  div {
    height: 100%;
    overflow: hidden;
    flex: 1;
  }

  h2 {
    width: 50%
  }

`