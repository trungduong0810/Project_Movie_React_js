export const fetcher = (...args) => fetch(...args).then((res) => res.json());
// `https://api.themoviedb.org/3/movie/${movieID}?api_key=e8161bb2864d424df9c3ea695c54495e`,
// https://api.themoviedb.org/3/search/movie?api_key=e8161bb2864d424df9c3ea695c54495e&query=${value}&page=${page}`
export const ApiDbMovie = "https://api.themoviedb.org/3/movie";
export const searchApiDbMovie = "https://api.themoviedb.org/3/search/movie";
export const apiKey = "api_key=e8161bb2864d424df9c3ea695c54495e";
export const typeMovie = {
  similar: "similar",
  popular: "popular",
};
export const credits = "credits";
export const videos = "videos";
