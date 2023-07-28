import React, { useRef, useState , useEffect } from "react";
import "./list.scss";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ListItems from "./../listItems/listitems"; 
import { db } from "../AxiosConfig/fireBase";
import { collection ,getDocs} from 'firebase/firestore';
  
export default function List(props ,{ searchTerm }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [movies, setMovies] = useState([]);
  const [moviesGenre, setMoviesGenres] = useState([[]]);
  const [currentPage, setCurrentPage] = useState();
  const listRef = useRef(); 
const [search,setSearch]=useState([]); 

  function getData(){
    const resultsCollection=collection(db,"NetflixClone");
    getDocs(resultsCollection).then(res=>{ 
     const result =res.docs.map(doc=>({
      data:doc.data(),
      id:doc.id
     }))
     
     setMovies(searchTerm ? searchTerm :result); 
     setSearch(result.map((m)=>searchTerm==m.data.name?m.data.name:m.data.Name))
     setMoviesGenres(result.map(m=>m.data.Genres));
     
    }).catch(err=>{console.log(err);});
  }
  useEffect(() =>{
    getData();

  },[ searchTerm ]);
   
  console.log(search);
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber >= 0) {
      setSlideNumber(slideNumber - 1);
      if (slideNumber===0){
        if (currentPage !== 0) {
          setCurrentPage(currentPage - 1);
        }
        else{
          setCurrentPage(20);
        }
      }
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      
    }
    if (direction === "right" && slideNumber <= movies.length - 6) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      if (slideNumber===14){
        setCurrentPage(currentPage +1);
      }

    }
  }; 
  
  return (
  
    <div className="list ">
      <span className="listTitle">{props.name}</span>
      <div className="WrapperTest">
      <div className="wrapperList">
        <ArrowBackIos
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="containerItemlist" ref={listRef}>
          {movies.map((movie) => (
           
            <ListItems key={ movie.id} index={movie.id} movie={movie.data} generss ={moviesGenre} />
          ))}
        </div>
        <ArrowForwardIos
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
      </div>
    </div>
  );
}
