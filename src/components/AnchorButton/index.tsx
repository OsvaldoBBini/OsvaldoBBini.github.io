import { Button } from "./styles"

interface IButton {
  text: string
}

export default function AnchorButton({text}: IButton): JSX.Element {
  return (
    <Button href="/timeline">{text}</Button>
  )
}