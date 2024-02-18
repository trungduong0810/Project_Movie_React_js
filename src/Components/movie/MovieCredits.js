import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../config";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

const MovieCredits = () => {
  const { movieID } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=e8161bb2864d424df9c3ea695c54495e`,
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
            <SwiperSlide key={item.id}>
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

export default MovieCredits;
