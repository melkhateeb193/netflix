import { useRef, useState, useEffect } from "react";
import "./browse.css";  
import ListItems from "../../listItems/listitems";
import axiosInstanceNetflix from "../../AxiosConfig/instanceAxios";
import NavBar from "../../NavBar/NavBar";
import Browse from "../browseByLanguages/browse";
import Footer from "../../footer/footer";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function BrowsePage() {  
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(); 

  useEffect(() => {
    axiosInstanceNetflix.get("/discover/movie",
    {
      params: { 
        page: currentPage,
      },
    }).then((res) => {  
      // console.log(res.data.results);
      setMovies(res.data.results);
    })
    .catch((err) => {
      console.log(err.message);
    });
 
  }, [currentPage]);
 
  return (
    <>
   
    <NavBar></NavBar>
    <Browse></Browse>
    <div className='container-fluid ps-5'>
                <div className='list-body px-5 mt-4'> 
                    <Row xs={5} md={5} className="main-design g-2  pt-4">
                        {movies.map((movie) => (
                            <Col key={movie.id} className='  pb-5'>
                                <Card className='card-design '>
                                    <Card.Img className='card-img ' variant="top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}></Card.Img>
                                    
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
      {/* <div className='list pb-5'>
                <div className='list-body px-5 mt-4 pe-5'> 
                    <Row xs={6} md={6} className="main-design g-2  pt-4">
                        {movies.map((movie ,index) => (
                            <Col key={movie.id}>
                                <Card className='card-design  containerItemlist'>
                                <ListItems key={index} index={index} movie={movie} />
                                    
                                </Card>
                            </Col>
                            
                        ))}
                    </Row>
                </div>
            </div> */}
      <Footer></Footer>
    </>
   
  );
}
