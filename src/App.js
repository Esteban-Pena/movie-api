import React, { useEffect, useState } from "react";
import './App.css';
import Movielist from "./movielist";
import Searchmovie from "./searchmovie";

const App = () => {

  const[searchmovie, setSearchmovie] = useState('')
  const[movie, setMovie] = useState([])

  const Requestmovie = async()=>{
    const url = `https://www.omdbapi.com/?s=${searchmovie}&apikey=c75fd646`;
    const response = await fetch(url);
    const data = await response.json();
    if(data.Search){
    setMovie(data.Search);
    }
  }

  useEffect(() =>{
    Requestmovie(searchmovie);
  }, [searchmovie])



  return (
  <div className="whole">    
    <div className="movie">
      <Searchmovie searchmovie={searchmovie} setSearchmovie={setSearchmovie}/>
    </div>
    <div className="movies">
    <Movielist movie={movie}/>
    </div>

  </div>
  )
  
}

export default App;
