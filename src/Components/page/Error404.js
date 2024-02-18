import React from "react";
import { useNavigate } from "react-router-dom";
const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="page-404 bg-red-700 w-full h-[100vh] relative">
      <div className=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-center text-white font-bold text-[150px]">404</h1>
        <p className="text-xl text-center text-white">
          WE ARE SORRY, BUT THE PAGE YOUR REQUESTED WAS NOT FOUND
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-white block w-[150px] mx-auto px-5 py-3 rounded-full text-red-700 font-semibold mt-10"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error404;
