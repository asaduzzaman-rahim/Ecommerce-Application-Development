import React from 'react'
import Navber from '../Component/Navber'
import Benar from '../Component/Benar'
import Header from '../Component/Header'
import SliderHome from "../Component/SliderHome"
import ServiceAria from '../Component/ServiceAria'
import FreshSales from '../Component/FreshSales'
import Category from '../Component/Category'
import ProductSection from '../Component/ProductSection'

const Home = () => {
  return (
    <>
      <Benar/>
      <FreshSales/>
      <Category/>
      <ProductSection/>
      <SliderHome/>
      <ServiceAria/>
    </>
  )
}

export default Home
