import { ReactNode } from "react"
import { Container } from "./styles"

interface IOutlineContainer {
  children: ReactNode
}

export default function OutlineContainer ({children}: IOutlineContainer) {
  return (
    <Container>
      {children}
    </Container>
  )
}