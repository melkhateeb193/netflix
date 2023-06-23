import { useRef, useState, useEffect } from "react";
import "../../list/list.scss";  
import ListItems from "../../listItems/listitems";
import axiosInstanceNetflix from "../../AxiosConfig/instanceAxios";
import NavBar from "../../NavBar/NavBar";
import Browse from "../browseByLanguages/browse";
import Footer from "../../footer/footer";
// import "../browseByLanguages/edit.css";  

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function BrowsePage() {  
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(8); 

  useEffect(() => {
    axiosInstanceNetflix.get("/discover/movie",
    {
      params: { 
        page: currentPage,
      },
    }).then((res) => {  
      setMovies(res.data.results);
    })
    .catch((err) => {
      console.log(err.message);
    });
 
  }, [currentPage]);
 
//   <div className="list">
       
//   <div className="wrapperList">
 
//     <div className="containerItemlist" ref={listRef}>
//       {movies.map((movie, index) => (
       
//         <ListItems key={index} index={index} movie={movie} />
//       ))}
//     </div>
    
//   </div>
// </div>
  return (
    <>
    <NavBar></NavBar>
      <Browse></Browse>
      <div className='list'>
                <div className='list-body px-5 mt-4'> 
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
            </div>
      <Footer></Footer>
    </>
   
  );
}
