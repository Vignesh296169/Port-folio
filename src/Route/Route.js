
import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbar from '../Appbar'
export default function Route() {
  return (
    <div>
        <Appbar/>
        <Outlet />
    </div>
  )
}
