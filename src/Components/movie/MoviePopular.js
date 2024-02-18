import React from "react";
import MovieCart from "./MovieCart";

const MoviePopular = () => {
  return (
    <div className="page-container">
      <div className="mt-5 mb-5 p-2">
        <h2 className="title text-white font-bold text-4xl">Trending</h2>
      </div>
      <div className="movieList ">
        <MovieCart movieType="popular"></MovieCart>
      </div>
    </div>
  );
};

export default MoviePopular;
