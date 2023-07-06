import React from 'react'
import "./Home.scss"
import NavBar from '../../NavBar/NavBar'
import Herosecton from '../../herosection/herosecton'
import List from '../../list/list'
import Footer from '../../footer/footer'

function Home() {
    return (
        <div className="Home " >
          <NavBar/>
          <Herosecton/>
          <List/>
          <List/>
          <List/> 
          <Footer/>
      </div>
    )
}

export default Home
