import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/navbar/navbar'

export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
