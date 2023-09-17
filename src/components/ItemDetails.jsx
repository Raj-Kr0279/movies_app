import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { DataContext } from '../context/DataContext';
import { useEffect } from 'react';
import Header from './Header';
import { Audio } from 'react-loader-spinner';
import { motion as framerMotion } from "framer-motion";

function ItemDetails() {
  const {IMG_MAIN_URL, movieItem, movieDetails, setMovieItem, tvClick, setTvClick, tvDetails, isLoaded, motion
  
  
  
  } = useContext(DataContext)
  const location = useLocation();
  const id = location.state.id;
  const tv = location.state.tv;
useEffect(()=>{
tv ? tvDetails(id) : movieDetails(id)
}, [id])
console.log(tvClick, "tvlcic")
  return (
    <>
    <Header/>
   {isLoaded ? 

    <framerMotion.div className="container-fluid mt-3"
    style={{backgroundImage: `linear-gradient(45deg, rgb(0 0 0 / 91%), rgb(0 0 0 / 67%)), url('${IMG_MAIN_URL+ movieItem.poster_path}')`}}
    initial={{ y: 100 }}
   animate={{ y: 0 }}
   transition={{ duration: 0.5 }}
   
    >
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
    </framerMotion.div> :

    <div className="d-flex justify-content-center align-items-center w-100" style={{minHeight: "70vh"}}>
    <Audio
    height="80"
    width="80"
    radius="9"
    color='red'
    ariaLabel='three-dots-loading'
    wrapperStyle
    wrapperClass
  />
  </div>

}



    </>
  );
}

export default ItemDetails;






