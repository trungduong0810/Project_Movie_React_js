import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState([]);
  const navigate = useNavigate();
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=e8161bb2864d424df9c3ea695c54495e`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) {
      setBannerMovie(data.results);
    }
  }, [data]);

  return (
    <div className="banner">
      <div className="mobile:p-2 page-container relative h-[500px] rounded-lg mt-8 overflow-hidden">
        <Swiper grabCursor="true" slidesPerView={"auto"} spaceBetween={0}>
          {bannerMovie.length > 0 &&
            bannerMovie.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="overlay absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt=""
                />
                <div className="absolute top-[50%] text-white left-10">
                  <h2 className="text-5xl font-bold ">{item.title}</h2>
                  <div className="movie__type flex items-center gap-3 mt-2">
                    <span className="bg-transparent border px-4 py-1 rounded-lg">
                      Action
                    </span>
                    <span className="bg-transparent border px-4 py-1 rounded-lg">
                      Avenger
                    </span>
                    <span className="bg-transparent border px-4 py-1 rounded-lg">
                      Drama
                    </span>
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <Button onClick={() => navigate(`/movie/${item.id}`)}>
                      Watch now
                    </Button>
                    <div className="bg-gray-500 flex items-center px-4 text-4xl cursor-pointer h-[50px] rounded-lg">
                      +
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
