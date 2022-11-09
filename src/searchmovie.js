import React from "react";

const Searchmovie = (props) => {
    return(


    <nav class="navbar navbar-expand-xl navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">OMDBApi</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <form class="d-flex">

      <input
            class="form-control" 
            id="formControlInput"
            value={props.value}
            onChange={(event) => props.setSearchmovie(event.target.value)}
            placeholder="search movie"
            ></input>
      </form>
    </div>
  </nav>
    )
}

export default Searchmovie;