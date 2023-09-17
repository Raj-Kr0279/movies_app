import { React, useState, useEffect, useContext } from "react";
import Header from "./Header";
import ReactPaginate from "react-paginate";
import { Audio } from 'react-loader-spinner'
import { DataContext } from "../context/DataContext";
import { Link, useNavigate } from "react-router-dom";
import ItemDetails from "./ItemDetails";

function Movies() {
  const { searchMovies, fetchPopularMovies , fetchNowPlayingMovies, fetchTopRatedMovies, fetchUpcomingMovies, searchM, setSearchM,
    isLoaded, setIsLoaded,
    Movies, setMovies, IMG_MAIN_URL } = useContext(DataContext);
  const navigate = useNavigate()
  const setInputValue = (e) => {
    setSearchM(e.target.value);
    // console.log(searchM);
  }


  useEffect(() => {
    fetchPopularMovies()
  }, [])

  const handleDetails = (id) => {
    alert(id.id)
  }



  return (
    <>
      <Header />
      <div className="container mt-3" style={{
        background: 'linear-gradient(45deg, #9f0404, transparent)',
        padding: '0.3em 1em',
        borderRadius: "40px"
      }}>
        <div className="row justify-content-between">
          <ul className="nav nav-tabs flex-column flex-sm-row d-flex" style={{ width: 'auto' }}>
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

          <form action="" style={{ width: "auto" }} onSubmit={searchMovies}>
            <input type="text" onChange={setInputValue} value={searchM} placeholder="Search movies..." className="mv-search" />
          </form>
        </div>
      </div>

      <div className="container list_wrapper">
        <div className="row">
          {isLoaded ? (Movies.map((movie) => {

            return (
              <>
                <Link to="/details" state={{id: movie?.id, tv: false}} className="movie_card" id="tomb">
                  <div className="info_section">
                    {console.log(IMG_MAIN_URL + movie.backdrop_path)}
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
                    </div>
                  </div>
                  <div
                    className="blur_back tomb_back"
                    style={{
                      background: `url(${IMG_MAIN_URL + movie.backdrop_path
                        }) no-repeat center center/cover`,
                    }}
                  ></div>
                </Link>
              </>
            );
          })) : <Audio
            height="80"
            width="80"
            radius="9"
            color='red'
            ariaLabel='three-dots-loading'
            wrapperStyle
            wrapperClass
          />}
        </div>
      </div>
    </>
  );
}

export default Movies;
