import {Container, ProgressButton } from "./styles"

export default function ProgressAnchor(): JSX.Element {
  return (
      <Container>
        <ProgressButton href='/' selected/>
        <ProgressButton href='/' />
        <ProgressButton href='/' />
        <ProgressButton href='/' />
        <ProgressButton href='/' />
      </Container>
    )
}