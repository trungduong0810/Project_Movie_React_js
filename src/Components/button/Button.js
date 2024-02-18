import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button = ({
  onClick,
  className,
  children,
  type,
  bgColor = "bg-primary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`watch ${bgColor} w-full mt-auto h-[50px] px-8 rounded-lg flex items-center justify-center cursor-pointer text-xl font-semibold gap-2 hover:bg-hover-primary transition-all ${className}`}
    >
      <h2>{children}</h2>
      <FontAwesomeIcon icon={faCirclePlay} className="text-3xl" />
    </button>
  );
};

export default Button;
