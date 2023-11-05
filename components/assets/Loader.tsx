import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin w-fit h-fit">
        <i className="ri-loader-4-line"></i>
      </div>
    </div>
  );
};

export default Loader;
