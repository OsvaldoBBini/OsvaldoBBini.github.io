import { PageContext } from "./contexts/PageContext"
import Home from "./pages/Home"
import TimeLine from "./pages/TimeLine"
import {useContext} from 'react'

export default function Router() {

  const {page} = useContext(PageContext)

  return (
    <>
      {page === '/' && (<Home/>)}
      {page === '/timeline' && (<TimeLine/>)}
    </>
  )
}