import { React, useState, useEffect } from "react";
import Header from "./Header";
import ReactPaginate from "react-paginate";
import { Audio } from  'react-loader-spinner'

function Movies() {
  const IMG_MAIN_URL = "https://image.tmdb.org/t/p/w1280/";
  const [searchM, setSearchM]= useState([]);
 const[isLoaded, setIsLoaded] = useState(false);
  const [Movies, setMovies] = useState([]);
  const setInputValue = (e)=>{
    setSearchM(e.target.value);
    // console.log(searchM);
  }
  const searchMovies = (event)=>{
event.preventDefault();
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=0e92551729520c9409a827c3aee6f314&language=en-US&query=${searchM}&page=1&include_adult=false`)
      .then(response =>response.json())
      .then((data) => {
      setMovies(data.results)
      setIsLoaded(true)
    })
      .catch(error => console.log(error));
    }

  const fetchPopularMovies = () => {
    fetch(
      " https://api.themoviedb.org/3/movie/popular?api_key=0e92551729520c9409a827c3aee6f314&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results)
        setIsLoaded(true)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() =>{
    fetchPopularMovies()
  },[])

  const fetchNowPlayingMovies = () => {
    fetch(
      " https://api.themoviedb.org/3/movie/now_playing?api_key=0e92551729520c9409a827c3aee6f314&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setMovies(data.results);
        setIsLoaded(true)
      })
      .catch((err) => console.log(err));
  };
  const fetchTopRatedMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=0e92551729520c9409a827c3aee6f314&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setMovies(data.results);
        setIsLoaded(true)
      })
      .catch((err) => console.log(err));
  };
  const fetchUpcomingMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=0e92551729520c9409a827c3aee6f314&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setMovies(data.results);
        setIsLoaded(true)
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="container mt-3" style={{background: 'linear-gradient(45deg, #9f0404, transparent)',
    padding: '0.3em 1em'}}>
      <div className="row justify-content-between">
    <ul className="nav nav-tabs flex-column flex-sm-row d-flex" style={{width: 'auto'}}>
      <li className="nav-item">
        <a className="nav-link" onClick={fetchPopularMovies}>
          Popular
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={fetchNowPlayingMovies}>
          Now Playing
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={fetchTopRatedMovies}>
          Top Rated
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={fetchUpcomingMovies}>
          Upcoming
        </a>
      </li>
    </ul>
      
        <form action="" style={{width: "auto"}} onSubmit={searchMovies}>
          <input type="text" onChange={setInputValue} value={searchM} placeholder="Search movies..." className="mv-search"/>
        </form>
        </div>
    </div>

      <div className="container">
        <div className="row">
          {isLoaded ? (Movies.map((movie) => {
            return (
              <>
                <div className="movie_card" id="tomb">
                  <div className="info_section">
                    <div className="movie_header">
                      <img
                        alt={movie.title}
                        className="locandina"
                        src={IMG_MAIN_URL + movie.backdrop_path}
                      />
                      <h1>{movie.title}</h1>
                      <h4>{movie.release_date}</h4>
                      <span className="rating">{movie.vote_average}</span>
                      <p className="vote-count">
                        {movie.vote_count} Votes
                      </p>
                    </div>
                    <div className="movie_desc">
                      <p className="text">{movie.overview}</p>
                    </div>
                    <div className="movie_social">
                      <ul>
                        
                        <li>
                          <a href="" onClick={()=>{console.log("clicked")}}>Details</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="blur_back tomb_back"
                    style={{
                      background: `url(${
                        IMG_MAIN_URL + movie.backdrop_path
                      }) no-repeat center center/cover`,
                    }}
                  ></div>
                </div>
              </>
            );
          })): <Audio
          height = "80"
          width = "80"
          radius = "9"
          color = 'green'
          ariaLabel = 'three-dots-loading'     
          wrapperStyle
          wrapperClass
        />}
        </div>
      </div>
    </>
  );
}

export default Movies;
