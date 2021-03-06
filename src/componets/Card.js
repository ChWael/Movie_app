import React from "react";
import Movie from "./Movie";



function Card({ show }) {
  const rate = [];
  const rest = [];
  rate.length = show.rate;
  rest.length = 5 - show.rate;

  return (
    <div className="show-card">
       <img className="Pic" src = {show.img} alt="Show" />
      <div className="show-info">
        <h5> {show.title} </h5>
        {rate
          .fill(<i style={{ color: "black" }} class="fas fa-star"></i>)
          .concat(rest.fill(<i class="far fa-star"></i>))}
        <div className="description">
          <h5> {show.description} </h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
