import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
//http://www.omdbapi.com?apikey=55241d16

const API_URL='http://www.omdbapi.com?apikey=55241d16';

const App = () => {

  const [movies , setMovies] = useState([]);
  const [searchTerm,setSearchTerm ] = useState('');
  
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('spiderman')
  },[])

  return(
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={() => searchMovies(searchTerm)} >Search</button>
      </div>
      {
        movies.length > 0 ?
        (
          <div className="container">{
            movies.map((movie)=>(
              <MovieCard movie={movie} />
              ))
          }
          </div>
        ):(
          <div className="emp">
          <h2>No Movies found</h2>
          </div>
        )
      }
    </div>
  );
}
export default App;