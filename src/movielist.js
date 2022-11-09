import React from "react";

const Movielist = (props) => {
    return(
        <>
        {props.movie.map((movie,index)=>(
<div class="container">
<img src={movie.Poster} alt="Movie Poster" class="image"/>
<div class="overlay">
  <div class="text">
    <ul>
        <li>Name: {movie.Title}</li>
        <li>Year: {movie.Year}</li>
    </ul>
  </div>
</div>
</div>
       ))}
        </>
    )
}

export default Movielist;