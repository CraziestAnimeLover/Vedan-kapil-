import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import Advertisement from './shared/Advertisement'
import Signup from '.././components/auth/Signup'


const Home = () => {
  return (
    <div >
      {/* <Advertisement/> */}
      <div>
         {/* <Navbar/>
        <HeroSection/>
        <CategoryCarousel/> */}
        <Signup/>
        <LatestJobs/>
        <Footer/>
       
      </div>
        
    </div>
  )
}

export default Home