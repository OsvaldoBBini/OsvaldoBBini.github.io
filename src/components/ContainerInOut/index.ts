import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerInOut = styled(motion.div)`
  height: 100%;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  
  z-index:1;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  row-gap: 2rem;

  padding: 2rem;
`