import { PageContext } from "./contexts/PageContext"
import AgileManifest from "./pages/AgileManifest"
import AgileVsVelocity from "./pages/AgileVsVelocity"
import Home from "./pages/Home"
import ReorderGame from "./pages/ReorderGame"
import {useContext} from 'react'

export default function Router() {

  const {page} = useContext(PageContext)

  return (
    <>
      {page === '/' && (<Home/>)}
      {page === '/reorderGame' && (<ReorderGame/>)}
      {page === '/agilevsvelocity' && (<AgileVsVelocity/>)}
      {page === '/agilemanifest' && (<AgileManifest/>)}
    </>
  )
}