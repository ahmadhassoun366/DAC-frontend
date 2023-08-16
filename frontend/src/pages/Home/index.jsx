import React from 'react'
import Hero from './components/hero/hero'
import Services from './components/services/index'
import Footer from '../../layout/footer-layout/footer'
import Header from '../../layout/header-layout/header'
import Partnetship from './components/partnership/partnetship'

const index = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Partnetship/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default index