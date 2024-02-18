import React from "react";
import Header from "../header/Header";
import Banner from "../banner/Banner";
import MoviePlaying from "../movie/MoviePlaying";
import MovieTopRated from "../movie/MovieTopRated";
import MoviePopular from "../movie/MoviePopular";

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <MoviePlaying></MoviePlaying>
      <MovieTopRated></MovieTopRated>
      <MoviePopular></MoviePopular>
    </>
  );
};

export default HomePage;
