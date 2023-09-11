import { React, useState, useEffect } from "react";
import Header from "./Header";

function Television() {
  const IMG_MAIN_URL = "https://image.tmdb.org/t/p/w500/";

  const [tv, setTv] = useState([]);
  const [SearchT, setSearchT] = useState([]);
  const setInputValue = (e) => {
    setSearchT(e.target.value);
    // console.log(SearchT);
  };
  const searchTv = (event) => {
    event.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=1&query=${SearchT}&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
    setTv(data.results)
        
      })
      .catch((error) => console.log(error));
  };
  const fetchPopularTv = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setTv(data.results);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchPopularTv();
  }, []);

  const fetchTodayTv = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setTv(data.results);
      })
      .catch((err) => console.log(err));
  };
  const fetchTopRatedTv = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setTv(data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div
        className="container mt-3"
        style={{
          background: "linear-gradient(45deg, #9f0404, transparent)",
          padding: "0.3em 1em",
        }}
      >
        <div className="row justify-content-between">
        <ul className="nav nav-tabs flex-column flex-sm-row d-flex" style={{ width: "auto" }}>
          <li className="nav-item">
            <a className="nav-link" onClick={fetchPopularTv}>
              Popular
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={fetchTodayTv}>
              Arriving Today
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={fetchTopRatedTv}>
              Top Rated
            </a>
          </li>
        </ul>
        <form action="" style={{ width: "auto" }} onSubmit={searchTv}>
          <input
            type="text"
            onChange={setInputValue}
            value={SearchT}
            placeholder="Search tv shows..."
            className="mv-search"
            style={{width: "auto"}}
          />
        </form>
      </div>
      </div>

      <div className="container">
        <div className="row">
          {tv.map((item) => {
            return (
              <>
                <div className="movie_card" id="tomb">
                  <div className="info_section">
                    <div className="movie_header">
                      <img
                        alt={item.title}
                        className="locandina"
                        src={IMG_MAIN_URL + item.backdrop_path}
                      />
                      <h1>{item.original_name}</h1>
                      <h4>{item.first_air_date}</h4>
                      <span className="minutes">125 min</span>
                      <p className="type">Action, Fantasy</p>
                    </div>
                    <div className="movie_desc">
                      <p className="text">{item.overview}</p>
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
                        IMG_MAIN_URL + item.backdrop_path
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

export default Television;
