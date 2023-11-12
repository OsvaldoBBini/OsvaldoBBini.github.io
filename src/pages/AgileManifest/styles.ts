import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  25% {
    box-shadow: 
    0 0 10px 20px #fff,
    0 0 25px 15px #f0f,
    0 0 25px 50px #0ff
  }
  50% {
    box-shadow: 
    0 0 20px 20px #fff,
    0 0 50px 30px #f0f, 
    0 0 50px 50px #0ff
  }
  75% {
    box-shadow:
    0 0 30px 20px #fff,
    0 0 75px 45px #f0f,
    0 0 75px 50px #0ff
  }
  100% {
    box-shadow: 
    0 0 40px 20px #fff,
    0 0 100px 60px #f0f,
    0 0 100px 50px #0ff
  }
`

export const Container = styled.section`
  height: 1000vh;
  width: 100%;
  background: #000;
  position: relative;

  h1 {
    font-size: 3rem;
  }

  .instructions {
    position: fixed;
    top: 10px;
    right: 20px;
    width: 10rem;
    text-align: center;
  }

`

export const Light = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  border-radius: 50px;
  position: relative;
  display: inline-block;

  background-color: #fff;
  transition: box-shadow 2s ease-out;
  animation: ${spin} 2s linear infinite;
  box-shadow: 
    0 0 40px 20px #fff,
    0 0 100px 60px #f0f,
    0 0 100px 50px #0ff
`