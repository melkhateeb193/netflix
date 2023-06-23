import { useEffect, useState } from "react";
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import "./listitems.scss";

function ListItems({ index, movie }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=7f853d464ac954ff376525370120f3bd`
        );
        if (response.ok) {
          const data = await response.json();
          setMovieData(data);
        } else {
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchMovieData();
  }, [movie.id]); 
  return (
    <div
      className="ListItemsHandle"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5  }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {movieData && (
        <img
          className="sliderImg"
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt=""
        />
      )}
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon" />
          <Add className="icon" />
          <ThumbUpAltOutlined className="icon" />
          <ThumbDownAltOutlined className="icon" />
        </div>
        {movieData && (
          <div className="itemsInfoTextLT">
            <span>{movieData.runtime} mins</span>
            <span className="Age">{movieData.adult ? "+18" : "+16"}</span>
            <span>{movieData.release_date.substring(0, 4)}</span>
          </div>
        )}
        {movieData && <div className="desc">{movieData.overview}</div>}
        {movieData && (
          <div className="genre">
            {movieData.genres.map((genre) => genre.name).join(", ")}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListItems;