import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`

  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 100%;

  position: relative;

  text-decoration: none;
  background: #ffff;
  text-align: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 10px;
  box-shadow: 10px 10px rgba(0,0,0,0.75);
  transition: all 0.2s;
  border: none;
  padding: 1rem;
  font-weight: 700;

  img {
    width: 5rem;
    height: 5rem;
  }
`