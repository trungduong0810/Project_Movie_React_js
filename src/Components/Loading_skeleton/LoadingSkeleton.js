import React from "react";
import "./styleLoadingSkeleton.css";

const LoadingSkeleton = (props) => {
  return (
    <div>
      <div
        className={`loading__skeleton ${props.className}`}
        style={{
          height: props.height,
          width: props.width,
          borderRadius: props.radius,
        }}
      ></div>
    </div>
  );
};

export default LoadingSkeleton;
