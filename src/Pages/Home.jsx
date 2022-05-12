import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Product from '../components/Product'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Slider />
      <Categories />
      <Product />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home