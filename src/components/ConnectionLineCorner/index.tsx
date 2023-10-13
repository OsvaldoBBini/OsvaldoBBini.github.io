import { Circle, CircleH, CircleV, Container } from "./style"

interface IConnectionLine{
  gridDirections: {
    columnStart: number,
    columnEnd: number,
    rowStart: number,
    rowEnd: number,
  },
  side: string
}

export default function ConnectionLineCorner({gridDirections, side}: IConnectionLine): JSX.Element {
  return (
    <Container griddirections={gridDirections}>
      <CircleV>
        <Circle/>
      </CircleV>
      <CircleH side={side}>
        <Circle/>
        <Circle/>
        <Circle/>
      </CircleH>
    </Container>
  )
}