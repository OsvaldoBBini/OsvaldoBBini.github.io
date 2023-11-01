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
  transform: translate(-50%, -50%)
`