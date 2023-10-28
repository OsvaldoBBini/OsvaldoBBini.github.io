import { PageContext } from "./contexts/PageContext"
import Home from "./pages/Home"
import ReorderGame from "./pages/ReorderGame"
import {useContext} from 'react'

export default function Router() {

  const {page} = useContext(PageContext)

  return (
    <>
      {page === '/' && (<Home/>)}
      {page === '/reorderGame' && (<ReorderGame/>)}
    </>
  )
}