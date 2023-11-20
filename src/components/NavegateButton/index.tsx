import { PageContext } from "../../contexts/PageContext"
import { Button } from "./styles"
import { useContext } from 'react'

interface IButton {
  text: string,
  destiny: string,
  disabled?: boolean
}

export default function NavegateButton({text, destiny, disabled}: IButton): JSX.Element {

  const {setPage} = useContext(PageContext)

  const sendToTop = () => window.scrollTo({top: 0, left: 0, behavior: 'instant'});

  return (
    <Button
      disabled={disabled}
      onClick={() => {
      setPage(destiny)
      sendToTop()
    }}>{text}</Button>
  )
}