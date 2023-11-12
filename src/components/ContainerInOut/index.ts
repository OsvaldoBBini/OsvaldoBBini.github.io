import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerInOut = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  row-gap: 2rem;
  z-index: 1;

  padding: 2rem;
`