import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Herosecton from '../../herosection/herosecton'
import List from '../../list/list'
import Footer from '../../footer/footer'
import "./movies.scss"
function Movies() {
    return (
        <div className="movies" >
        <NavBar/>
        <Herosecton/>
        <List/>
        <List/>
        <List/> 
        <Footer/>
    </div> 
    )
}

export default Movies
