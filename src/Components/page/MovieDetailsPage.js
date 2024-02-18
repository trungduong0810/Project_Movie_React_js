import React from "react";
import useSWR from "swr";
import "swiper/css";
import Header from "../header/Header";
import { ApiDbMovie, apiKey, credits, fetcher, typeMovie } from "../../config";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import MovieTrailer from "../movie/MovieTrailer";
import Button from "../button/Button";

const MovieDetailsPage = () => {
  const { movieID } = useParams();
  const { data, error } = useSWR(`${ApiDbMovie}/${movieID}?${apiKey}`, fetcher);
  const loading = !data && !error;
  return (
    <div>
      <Header></Header>
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin absolute top-1/2 left-1/2 "></div>
      )}
      {!loading && data && (
        <>
          <div>
            <div className="w-full relative">
              <div className="overlay absolute inset-0 bg-black opacity-60"></div>
              <img
                className="w-full h-[700px] mobile:w-full mobile:h-[400px]"
                src={`http://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                alt=""
              />
            </div>
            <img
              className="w-[900px] h-[400px] mobile:w-full mobile:h-[300px] mobile:p-2 mx-auto mt-[-200px] rounded-xl relative z-10"
              src={`http://image.tmdb.org/t/p/original/${data.backdrop_path}`}
              alt=""
            />
          </div>
          <h2 className="text-center text-white text-3xl font-bold mt-7">
            {data.title}
          </h2>
          <div className="movie__type flex items-center gap-3 mt-5 text-white justify-center">
            {data.genres.length > 0 &&
              data.genres.map((item) => (
                <div key={item.id}>
                  <span className="bg-transparent border px-4 py-1 rounded-lg">
                    {item.name}
                  </span>
                </div>
              ))}
          </div>
          <p className="text-white w-[700px] text-center mx-auto mt-5 mobile:w-full">
            {data.overview}
          </p>
        </>
      )}
      <MovieCredits></MovieCredits>
      <MovieTrailer></MovieTrailer>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

const MovieCredits = () => {
  const { movieID } = useParams();
  const { data } = useSWR(
    `${ApiDbMovie}/${movieID}/${credits}?${apiKey}`,
    fetcher
  );
  if (!data) return;
  const { cast } = data;
  return (
    <div className="movieDetailPage page-container mt-10">
      <h1 className="text-center text-4xl font-bold text-white my-4">Cast</h1>
      <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
        {cast.length > 0 &&
          cast.map((item) => (
            <SwiperSlide key={item.id} className="mobile:p-2">
              <div className="w-[300px]">
                {item.profile_path === null ? (
                  <img
                    className="w-full h-[400px] rounded-lg"
                    src="http://meta.com.sg/wp-content/uploads/2015/09/blank-avatar.png"
                    alt=""
                  />
                ) : (
                  <img
                    className="w-full h-[400px] rounded-lg"
                    src={`http://image.tmdb.org/t/p/w500/${item.profile_path}`}
                    alt=""
                  />
                )}

                <h2 className="text-white font-semibold text-center text-xl mt-4">
                  {item.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

const MovieSimilar = () => {
  const { movieID } = useParams();
  const navigate = useNavigate();
  const { data } = useSWR(
    `${ApiDbMovie}/${movieID}/${typeMovie.similar}?${apiKey}`,
    fetcher
  );
  if (!data) return;
  return (
    <div className="page-container movieSimilar">
      <h1 className="mobile: p-2 text-3xl text-white font-bold mt-10 mb-5">
        Similar movies
      </h1>
      <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
        {data.results.length > 0 &&
          data.results.map((item) => (
            <SwiperSlide key={item.id} className="mobile:p-2">
              <div className="movieItem h-[100%] text-white w-[300px] p-3 rounded-lg border flex flex-col border-gray-600 bg-slate-800">
                <img
                  className="w-full h-[250px] object-cover rounded-lg "
                  src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt=""
                />
                <div className="flex flex-col flex-1">
                  <h3 className="mt-auto mb-2 text-lg">{item.title}</h3>
                  <div className="flex items-center justify-between mt-auto mb-4">
                    <span className="text-gray-400">
                      {new Date(item.release_date).getFullYear()}
                    </span>
                    <span>
                      {item.vote_average}
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-400 ml-2"
                      />
                    </span>
                  </div>
                  <Button onClick={() => navigate(`/movie/${item.id}`)}>
                    Watch now
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
export default MovieDetailsPage;
