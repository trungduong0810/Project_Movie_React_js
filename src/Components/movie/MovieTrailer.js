import React from "react";
import { ApiDbMovie, apiKey, fetcher, videos } from "../../config";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const MovieTrailer = () => {
  const { movieID } = useParams();
  const { data } = useSWR(
    `${ApiDbMovie}/${movieID}/${videos}?${apiKey}`,
    fetcher
  );
  if (!data) return;
  return (
    <div className="page-container">
      {data.results.slice(0, 2).map((item) => (
        <div key={item.id}>
          <div className="mobile:p-2 ">
            <h3 className="bg-second px-5 py-2 rounded-lg inline-block text-white mt-7 mb-3 text-xl">
              {item.name}
            </h3>
          </div>
          <div className="w-full mobile:p-2">
            <iframe
              className="rounded-xl w-full h-[500px]"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="The Shawshank Redemption | Trailer | Warner Bros. Entertainment"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieTrailer;
