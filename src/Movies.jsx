import { React, useState, useEffect } from "react";
import Header from "./Header";

function Movies() {
  const IMG_MAIN_URL = "https://image.tmdb.org/t/p/w1280/";

  const [Movies, setMovies] = useState([]);
  const fetchPopularMovies = () => {
    fetch(
      " https://api.themoviedb.org/3/movie/popular?api_key=0e92551729520c9409a827c3aee6f314&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
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
        console.log(data.results);
        setMovies(data.results);
      })
      .catch((err) => console.log(err));
  };
  const fetchTopRatedMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=0e92551729520c9409a827c3aee6f314&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch((err) => console.log(err));
  };
  const fetchUpcomingMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=0e92551729520c9409a827c3aee6f314&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="container mt-3" style={{background: 'linear-gradient(45deg, #9f0404, transparent)',
    padding: '0.3em 1em'}}>
    <ul className="nav nav-tabs flex-column flex-sm-row d-flex">
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
    </div>

      <div className="container">
        <div className="row">
          {Movies.map((movie) => {
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
                        <li></li>
                        <li>
                          <svg data-testid="DeleteIcon"></svg>
                        </li>
                        <li>
                          <i className="material-icons">chat_bubble</i>
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
          })}
        </div>
      </div>
    </>
  );
}

export default Movies;
