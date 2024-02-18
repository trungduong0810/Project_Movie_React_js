import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navList = [
    {
      id: 1,
      path: "/",
      page: "Home",
    },
    {
      id: 2,
      path: "/movie",
      page: "Movie",
    },
  ];
  return (
    <>
      <header className="flex items-center justify-center text-white gap-5 bg-gray-900 w-[vw] p-6 text-xl">
        {navList.length > 0 &&
          navList.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              {item.page}
            </NavLink>
          ))}
      </header>
    </>
  );
};

export default Header;
