import { Circle, Container } from "./style"

interface IConnectionLine{
  gridDirections: {
    columnStart: number,
    columnEnd: number,
    rowStart: number,
    rowEnd: number,
  }
  direction: string
}

export default function ConnectionLine({gridDirections, direction}: IConnectionLine): JSX.Element {
  return (
    <Container griddirections={gridDirections} direction={direction}>
      <Circle/>
      <Circle/>
      <Circle/>
      <Circle/>
      <Circle/>
    </Container>
  )
}