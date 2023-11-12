import { useAppSelector } from "@/redux/hooks";
import React from "react";
import MovieCard from "../shared/MovieCard";
import MovieModal from "../shared/MovieModal";
import { useParams } from "next/navigation";
import { MovieTypes } from "@/types/movie.types";

const AllList = () => {
  const params: { all: string } = useParams();
  const type = params.all;
  const { trending, popular, topRated, popularTvSeries, movieId } =
    useAppSelector((state) => state.movie);

  const types: any = {
    "popular-movies": { list: popular, type: "movie" },
    "trending-movies": { list: trending, type: "movie" },
    "top-rated-movies": { list: topRated, type: "movie" },
    "popular-series": { list: popularTvSeries, type: "tv" },
  };

  return (
    <>
      <div>
        <div className="flex flex-wrap gap-10">
          {types[type]?.list?.results
            .filter((res: MovieTypes) => res.backdrop_path)
            .map((item: MovieTypes, index: number) => {
              return (
                <MovieCard
                  type={types[type].type}
                  key={index}
                  data={item}
                  large
                />
              );
            })}
        </div>
      </div>
      {movieId && <MovieModal />}
    </>
  );
};

export default AllList;
