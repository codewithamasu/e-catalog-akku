import React from 'react'
import Navbar
 from '../components/main/Navbar'
import Hero from '../components/main/Hero'
import FeaturedProduct from '../components/main/FeaturedProduct'
function MainPage() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
        <FeaturedProduct/>
      </main> 
    </>
  )
}

export default MainPage