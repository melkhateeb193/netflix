import React from 'react'
import NavBar from './../../NavBar/NavBar';
import Footer from '../../footer/footer';
import List from '../../list/list';
import "./new&popular.scss"
function NewPopular() {
    return (
        <div className="NewPopular" >
        <NavBar/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <Footer/>
    </div> 
    )
}

export default NewPopular
