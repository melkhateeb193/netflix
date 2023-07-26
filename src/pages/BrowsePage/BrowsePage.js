   
import NavBar from "../../NavBar/NavBar";
import Browse from "../browseByLanguages/browse";
import Footer from "../../footer/footer";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import List from "../../list/list";
export default function BrowsePage() {
 

  return (
    <>

      <NavBar></NavBar>
      <Browse></Browse>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      
      <Footer></Footer>
    </>

  );
}


// <div className='container-fluid ps-5'>
// <div className='list-body px-5 mt-4'>
//     <Row xs={5} md={5} className="main-design g-2  pt-4">
//       {movies.map((movie) => (
//         <Col key={movie.id} className='  pb-5'>
//           <Card className='card-design '>
//             <Card.Img className='card-img ' variant="top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}></Card.Img>

//           </Card>

//         </Col>
//       ))}
//     </Row>
//   </div>
// </div>