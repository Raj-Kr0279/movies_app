import React from "react";

function CategoriesPanelTv({ PopularTv, TodayTv, TopRatedTv }) {
  return (
    <div className="container mt-3" style={{background: 'linear-gradient(45deg, #9f0404, transparent)',
    padding: '0.3em 1em'}}>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link" onclick={PopularTv}>
          Popular
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={TodayTv}>
          Arriving Today
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={TopRatedTv}>
          Top Rated
        </a>
      </li>
    </ul>
    </div>

  );
}

export default CategoriesPanelTv;
