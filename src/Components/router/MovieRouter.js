import React, { Fragment, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../page/HomePage"));
const MoviePage = lazy(() => import("../page/MoviePage"));
const MovieDetailsPage = lazy(() => import("../page/MovieDetailsPage"));
const Error404 = lazy(() => import("../page/Error404"));

const MovieRouter = () => {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movie" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieID"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default MovieRouter;
