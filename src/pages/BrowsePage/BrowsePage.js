   
import NavBar from "../../NavBar/NavBar";
import Browse from "../browseByLanguages/browse";
import Footer from "../../footer/footer"; 
import List from "../../list/list";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../AxiosConfig/fireBase";
import { useEffect, useState } from "react";
import ListItems from "../../listItems/listitems";
export default function BrowsePage() {
  const [movies, setMovies] = useState([]);
  const [moviesGenre, setMoviesGenres] = useState([[]]);

  function getData(){
    const resultsCollection=collection(db,"NetflixClone");
    getDocs(resultsCollection).then(res=>{ 
     const result =res.docs.map(doc=>({
      data:doc.data(),
      id:doc.id
     }))
     setMovies(result); 
     setMoviesGenres(result.map(m=>m.data.Genres));
     
    }).catch(err=>{console.log(err);});
  }
  useEffect(() =>{
    getData();

  },[]);
  // console.log(movies);
  return (
    <>

        <NavBar></NavBar>  
         <Browse></Browse> 

      <div className='container-fluid ps-5'>
      <div className="containerItemlist"> 
    <Row xs={5} md={5} className="main-design   pt-4">
      {movies.map((movie) => ( 
        //  <Col key={movie.data.id} className="mb-4">
           <Card className="h-100" style={{ width: "14rem" }}>
           <ListItems key={ movie.id} index={movie.id} movie={movie.data} generss ={moviesGenre} />
           </Card>
            // </Col>
 
      ))}
    </Row>
  </div>
</div>

      {/* <List></List>
      <List></List>
      <List></List>
      <List></List> */}
      
      <Footer></Footer>
    </>

  );
}


