import React from 'react'
import Hero from '../component/thriveFi/hero'
import Nav from '../component/nav'
import Event from '../component/thriveFi/event'
import Getinvolve from '../component/thriveFi/getinvolved'
import Footer from '../component/thriveFi/footer'


export default function Page() {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Event/>
        <Getinvolve/>
        <Footer/>

    </div>
  )
}
