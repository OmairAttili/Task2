import Navbar from './components/navbar/Navbar'
import LowerFooter from './components/footer/LowerFooter'
import UpperFooter from './components/footer/UpperFooter'
import { Outlet } from 'react-router'
import React from 'react'

function MainLayout() {
  return<>
  <Navbar/>
  <Outlet/>
  <UpperFooter/>
  <LowerFooter/>
  </>
}

export default MainLayout