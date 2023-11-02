import styled from "styled-components";
import { motion } from "framer-motion";

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