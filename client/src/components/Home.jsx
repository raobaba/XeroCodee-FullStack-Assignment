import React from 'react'
import Navbar from './Navber'
import Footer from './Footer'
import Suggestion from '../pages/Suggestion'

function Home() {
  return (
    <div>
        <Navbar/>
        <Suggestion/>
        <Footer/>
    </div>
  )
}

export default Home