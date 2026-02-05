import React from 'react'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import Navber from './Component/Navber';
import Footer from './Component/Footer';
import Header from './Component/Header';


const Layout = () => {
  return (
    <>
    <Header/>
    <Navber/>
    <Outlet />
    <Footer/>      
    </>
  )
}

export default Layout
