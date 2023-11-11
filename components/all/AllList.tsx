import { useAppSelector } from "@/redux/hooks";
import React from "react";
import MovieCard from "../shared/MovieCard";
import MovieModal from "../shared/MovieModal";
import { useParams } from "next/navigation";

const AllList = () => {
  const params = useParams();
  const type = params.all;
  const { trending, popular, topRated, popularTvSeries, movieId } =
    useAppSelector((state) => state.movie);

  const types = {
    "popular-movies": popular,
    "trending-movies": trending,
    "top-rated-movies": topRated,
    "popular-series": popularTvSeries,
  };

  return (
    <>
      <div>
        <div className="flex flex-wrap gap-10">
          {types[type]?.results
            .filter((res) => res.backdrop_path)
            .map((item, index) => {
              return <MovieCard key={index} data={item} large />;
            })}
        </div>
      </div>
      {movieId && <MovieModal />}
    </>
  );
};

export default AllList;
