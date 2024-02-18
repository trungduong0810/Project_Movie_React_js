import React, { useEffect, useState } from "react";
import useSWR from "swr";
import {
  ApiDbMovie,
  apiKey,
  fetcher,
  searchApiDbMovie,
  typeMovie,
} from "../../config";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import ReactPaginate from "react-paginate";
import Button from "../button/Button";
import { MovieLoadingSkeleton } from "./MovieCart";

const MovieList = () => {
  const [page, setPage] = useState(1);
  const [movieTotalPage, setMovieTotalPage] = useState();
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=e8161bb2864d424df9c3ea695c54495e"
  );
  const [movieList, setMovieList] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [value] = useDebounce(valueSearch, 500);
  const navigate = useNavigate();
  const { data, error } = useSWR(url, fetcher);

  const loading = !data && !error;
  useEffect(() => {
    if (data && data.results) {
      setMovieList(data.results);
      setMovieTotalPage(data.total_pages);
    }
  }, [data]);

  const handleSearch = (e) => {
    setValueSearch(e.target.value);
  };
  useEffect(() => {
    if (value) {
      setUrl(`${searchApiDbMovie}?${apiKey}&query=${value}&page=${page}`);
    } else {
      setUrl(`${ApiDbMovie}/${typeMovie.popular}?${apiKey}&page=${page}`);
    }
  }, [value, page]);

  // phan trang react js
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    setPageCount(movieTotalPage);
  }, [movieTotalPage]);
  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  return (
    <>
      <div className="mt-5 page-container w-[500px] mx-auto mobile:w-[350px]">
        <div className="flex items-center gap-x-3">
          <input
            onChange={handleSearch}
            className="w-full outline-none px-3 py-2 h-[40px] rounded-lg bg-gray-300"
            placeholder="Enter your search movie"
            type="text"
          />
          <button className="bg-primary h-[40px] px-4 rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
      {loading && (
        <div className="flex justify-center gap-5 items-center flex-wrap page-container">
          {new Array(20).fill(0).map(() => (
            <MovieLoadingSkeleton key={v4()}></MovieLoadingSkeleton>
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-5 mt-7">
        {!loading &&
          movieList.length > 0 &&
          movieList.map((item) => (
            <div
              key={item.id}
              className="movieItem text-white laptop:w-[300px] mobile:w-[350px] p-3 rounded-lg border flex flex-col border-gray-600 bg-slate-800"
            >
              <img
                className="w-full mobile:-[350px] h-[250px] mobile:h-[300px] object-cover rounded-lg "
                src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt=""
              />
              <div className="flex flex-col flex-1">
                <h3 className="mt-3 mb-2 text-lg">{item.title}</h3>
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
          ))}
      </div>

      <div className="page-container text-white mt-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </>
  );
};

export default MovieList;
