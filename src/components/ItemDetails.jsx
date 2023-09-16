import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { DataContext } from '../context/DataContext';
import { useEffect } from 'react';

function ItemDetails() {
  const {IMG_MAIN_URL, movieItem, movieDetails, setMovieItem} = useContext(DataContext)
  const location = useLocation();
  const id = location.state;
useEffect(()=>{
  movieDetails(id)
}, [id])
  return (
    <div className="container-fluid mt-3" style={{backgroundImage: `linear-gradient(45deg, rgb(0 0 0 / 91%), rgb(0 0 0 / 67%)), url('${IMG_MAIN_URL+ movieItem.poster_path}')`}}>
      <div className="row">
        <div className="col-md-4">
          <img
            src={IMG_MAIN_URL + movieItem.poster_path}
            alt={movieItem.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <h2>{movieItem.original_title}</h2>
          <p>Release Date: {movieItem.release_date}</p>
          <p>Rating: {movieItem.vote_average}</p>
          <p>{movieItem.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;






