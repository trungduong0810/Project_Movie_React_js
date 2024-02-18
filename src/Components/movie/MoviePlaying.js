import React from "react";
import MovieCart from "./MovieCart";
import "swiper/css";

const MoviePlaying = () => {
  return (
    <div className="page-container">
      <div className="mt-5 mb-5 p-2">
        <h2 className="title text-white font-bold text-4xl">Now Playing</h2>
      </div>
      <div className="movieList ">
        <MovieCart movieType="now_playing"></MovieCart>
      </div>
    </div>
  );
};

export default MoviePlaying;
