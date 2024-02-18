import "swiper/css";
import useSWR from "swr";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ApiDbMovie, apiKey, fetcher } from "../../config";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSkeleton from "../Loading_skeleton/LoadingSkeleton";

const MovieCart = (props) => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const { data } = useSWR(
    `${ApiDbMovie}/${props.movieType}?${apiKey}`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) {
      setMovie(data.results);
    }
  }, [data]);
  return (
    <Swiper grabCursor={"true"} spaceBetween={70} slidesPerView={"auto"}>
      {movie.length > 0 &&
        movie.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="
            movieItem h-[100%] text-white w-[300px] p-3 rounded-lg border flex flex-col border-gray-600 bg-slate-800"
            >
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
  );
};

export const MovieLoadingSkeleton = () => {
  return (
    <div className="mt-5 movieItem w-[300px] p-3 rounded-lg border  border-gray-600">
      <LoadingSkeleton
        height="250px"
        width="100%"
        radius="8px"
      ></LoadingSkeleton>
      <div className="flex flex-col flex-1 mt-2">
        <LoadingSkeleton
          height="30px"
          width="100%"
          radius="12px"
        ></LoadingSkeleton>
        <div className="flex items-center justify-between mb-4 mt-2 ">
          <span className="bg-gray-200 rounded-lg">
            <LoadingSkeleton
              height="10px"
              width="100px"
              radius="8px"
            ></LoadingSkeleton>
          </span>
          <span className="bg-gray-200 rounded-lg">
            <LoadingSkeleton
              height="10px"
              width="80px"
              radius="8px"
            ></LoadingSkeleton>
          </span>
        </div>
        <LoadingSkeleton
          height="50px"
          width="100%"
          radius="8px"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};

export default MovieCart;
