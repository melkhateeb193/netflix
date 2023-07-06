import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Herosecton from '../../herosection/herosecton'
import Footer from '../../footer/footer'
import List from '../../list/list'
import "./tvshow.scss"
function TvShow() {
    return (
        <div className="tvshow" >
        <NavBar/>
        <Herosecton/>
        <List/>
        <List/>
        <List/> 
        <Footer/>
    </div> 
    )
}

export default TvShow

