import NavBar from "../../NavBar/NavBar";
import Browse from "../browseByLanguages/browse";
import Footer from "../../footer/footer";   
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../AxiosConfig/fireBase";
import { useEffect, useState } from "react"; 
import List from "../../list/list";
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
        <div className="Home" > 
        <NavBar></NavBar>  
         <Browse></Browse> 
         <List name ="Continue Watching For Group4"/>
          <List name="Korean"/>
          <List name="Popular on NetFlix"/> 
          <List name="Egyptien TV"/> 
          <List name="For You"/> 
          <List name="Recommended Movies"/> 

       
      </div>
      <Footer></Footer>
    </>

  );
}


