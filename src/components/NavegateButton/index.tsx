import { PageContext } from "../../contexts/PageContext"
import { Button } from "./styles"
import { useContext } from 'react'

interface IButton {
  text: string,
  destiny: string,
}

export default function NavegateButton({text, destiny}: IButton): JSX.Element {

  const {setPage} = useContext(PageContext)

  return (
    <Button onClick={() => setPage(destiny)}>{text}</Button>
  )
}