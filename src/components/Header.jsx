import React from "react";
import { Link, useNavigate } from "react-router-dom";
import video from "../Assets/bg.mp4";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header" style={{ background: 'linear-gradient(45deg, #000000 0%, #ff000030 51%, #000056 100%)'}}>
        <div className="container-fluid px-5 py-3 ">
          <div className="topbar d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-between">
            <div className="" style={{cursor: "pointer"}} onClick={()=> navigate("/")}><span className="logo_head">webflix</span></div>


            {/* <div class="text-video">
  <iframe src={video} width="640" height="360" frameborder="0" allow="autoplay; fullscreen;"></iframe>
  <div className="text">
    <p>VIDEO TEXT</p>
  </div>
</div> */}
            <div className="links">
              <Link to="/">MOVIES</Link>
              <Link to="/tv">TV SHOWS</Link>
              </div>
          </div>
        </div>
      
        {/* <div className="navigation">
          <ul className="flex-column flex-sm-row">
            <li>
              <Link to="/">Browse Movies</Link>
            </li>
            <li>
              <Link to="/tv">What's on TV</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
}

export default Header;
