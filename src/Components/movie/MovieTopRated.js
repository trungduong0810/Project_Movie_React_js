import React from "react";
import MovieCart from "./MovieCart";

const MovieTopRated = () => {
  return (
    <div className="page-container">
      <div className="mt-5 mb-5 p-2">
        <h2 className="title text-white font-bold text-4xl">Top Rated</h2>
      </div>
      <div className="movieList ">
        <MovieCart movieType="top_rated"></MovieCart>
      </div>
    </div>
  );
};

export default MovieTopRated;
