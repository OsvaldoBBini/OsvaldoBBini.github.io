import { PageContext } from "./contexts/PageContext"
import AgileManifest from "./pages/AgileManifest"
import AgileVsVelocity from "./pages/AgileVsVelocity"
import Home from "./pages/Home"
import ReorderGame from "./pages/ReorderGame"
import {useContext} from 'react'
import Scrum from "./pages/Scrum"
import OtherMethods from "./pages/OtherMethods"

export default function Router() {

  const {page} = useContext(PageContext)

  return (
    <>
      {page === '/' && (<Home/>)}
      {page === '/reorderGame' && (<ReorderGame/>)}
      {page === '/agilevsvelocity' && (<AgileVsVelocity/>)}
      {page === '/agilemanifest' && (<AgileManifest/>)}
      {page === '/scrum' && (<Scrum/>)}
      {page === '/others' && (<OtherMethods/>)}
    </>
  )
}