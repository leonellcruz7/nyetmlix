"use client";
import React from "react";
import MovieCard from "../../shared/MovieCard";

import { useAppDispatch } from "@/redux/hooks";
import { MovieCarouselProps } from "./types";

const MovieCarousel = ({ label, list }: MovieCarouselProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="pl-4 md:pl-10">
      <div className="relative flex flex-col gap-2">
        <p className="label">{label}</p>
        <div className="flex gap-2 overflow-x-scroll hide-scroll snap-x p-4">
          {list?.map((item, index) => {
            return <MovieCard data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
