import React from 'react'

import Header from '../components/header/Header'
import Hero from '../components/herosection/Hero'
import Industries from '../components/industries/Industries'
import Company from '../components/comapny/Company'
import Recent from '../components/recentjobs/Recent'
import Footer from '../components/footer/Footer'
import Getstarted from '../components/getstarted/Getstarted'
import RecentPosts from '../components/recentposts/RecentPosts'
import Steps from '../components/steps/Steps'
import WhyUs from '../components/whyus/WhyUs'


function Home() {
  return (
    <div className=" w-full h-full">
      <Header/>
      <Hero/>
      <Industries/>
      <Company/>
      <Recent/>
      <Getstarted/>
      <RecentPosts/>
      <Steps/>
      <WhyUs/>
      <Footer/>
    </div>
  )
}

export default Home
