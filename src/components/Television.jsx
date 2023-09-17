import { React, useState, useEffect, useContext } from "react";
import Header from "./Header";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

function Television() {
  const [SearchT, setSearchT] = useState([]);

const { fetchTopRatedTv,fetchTodayTv, fetchPopularTv, searchTv, tv, setTv, IMG_MAIN_URL, tvClick, setTvClick} = useContext(DataContext)

const setInputValue = (e) => {
    setSearchT(e, e.target.value);
  };


  useEffect(() => {
    fetchPopularTv();
  }, []);

 const handleSearch = ()=>{
  searchTv(SearchT)
 }


  return (
    <>
      <Header />
      <div
        className="container mt-3"
        style={{
          background: "linear-gradient(45deg, #9f0404, transparent)",
          padding: "0.3em 1em",
          padding: '0.3em 1em',
          borderRadius: "40px"
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
        <form action="" style={{ width: "auto" }} onSubmit={(e)=> {e.preventDefault(); handleSearch()}}>
          <input
            type="text"
            onChange={(e)=> setSearchT(e.target.value)}
            value={SearchT}
            placeholder="Search tv shows..."
            className="mv-search"
            style={{width: "auto"}}
          />
        </form>
      </div>
      </div>

      <div className="container list_wrapper">
        <div className="row">
          {tv.map((item) => {
            return (
              <>
                <Link to = "/details" state = {{id: item?.id, tv: true}}   className="movie_card" id="tomb" key={item?.id}>
                  <div className="info_section">
                    <div className="movie_header">
                      <img
                        alt={item?.title}
                        className="locandina"
                        src={IMG_MAIN_URL + item.backdrop_path}
                      />
                      <h1>{item?.original_name}</h1>
                      <h4>{item?.first_air_date}</h4>
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
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Television;
