import React from "react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../footer/footer";
import { useSelector } from "react-redux";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function MyList() {
    const favorite = useSelector((state) => state.moviesList);


    return (
        <>
            <NavBar></NavBar>
            <div className="contianer-fluid m-4 p-5 row ">

                <div className="col-md-3 ps-5 colors">
                    <h3>My List</h3>
                </div>
            </div>
            <div className='container-fluid ps-5'>
                <div className='list-body px-5 mt-4'>
                    <Row xs={5} md={5} className="main-design g-2  pt-4">
                        {favorite.map((movie) => (
                            <Col key={movie.id} className='  pb-5'>
                                <Card className='card-design '>
                                    <Card.Img className='card-img ' variant="top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}></Card.Img>

                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>


            <Footer></Footer>
        </>
    );
}

export default MyList;
