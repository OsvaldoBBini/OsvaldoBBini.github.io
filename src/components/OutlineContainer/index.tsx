import { ReactNode } from "react"
import { Container } from "./styles"

interface IOutlineContainer {
  children: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
}

export default function OutlineContainer ({children, style}: IOutlineContainer) {
  return (
    <Container style={style}>
      {children}
    </Container>
  )
}