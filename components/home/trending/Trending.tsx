import React from "react";
import MovieCard from "../../shared/MovieCard";

const Trending = () => {
  return (
    <div className="pl-4 md:pl-10">
      <div>
        <p className="label">Trending now</p>
        <div className="flex gap-4 overflow-x-scroll hide-scroll snap-x">
          {Array.from({ length: 10 }).map((item, index) => {
            return <MovieCard key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
