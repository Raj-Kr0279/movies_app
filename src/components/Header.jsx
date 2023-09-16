import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header" style={{ background: 'linear-gradient(45deg, #000000 0%, #ff000030 51%, #000056 100%)'}}>
        <h1>WEBFLIX</h1>
        <h3>Only place for all your entertainment needs</h3>
        <div className="navigation">
          <ul className="flex-column flex-sm-row">
            <li>
              <Link to="/">Browse Movies</Link>
            </li>
            <li>
              <Link to="/Television">What's on TV</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
