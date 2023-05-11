import React from 'react'
import { Outlet } from 'react-router-dom'

function GameLayout() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default GameLayout
