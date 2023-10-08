import styled from "styled-components";

export const Box = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.gray[100]};
  box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75);
`