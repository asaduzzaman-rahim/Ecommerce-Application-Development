import React from 'react'
import Navber from '../Component/Navber'
import Benar from '../Component/Benar'
import Header from '../Component/Header'
import SliderHome from "../Component/SliderHome"
import ServiceAria from '../Component/ServiceAria'
import FreshSales from '../Component/FreshSales'
import Category from '../Component/Category'
import BestSellingProductSection from '../Component/BestSellingProductSection'
import OurExploreProducts from '../Component/OurExploreProducts'
import FeaturedArrival from '../Component/FeaturedArrival'

const Home = () => {
  return (
    <>
      <Benar/>
      <FreshSales/>
      <Category/>
      <BestSellingProductSection/>
      <SliderHome/>
      <OurExploreProducts/>
      <FeaturedArrival/>
      <ServiceAria/>
    </>
  )
}

export default Home
