"use client";
import React from "react";
import MovieCard from "../../shared/MovieCard";

import { useAppDispatch } from "@/redux/hooks";
import { MovieCarouselProps } from "@/types/movie.types";
import Link from "next/link";

const MovieCarousel = ({ label, list, viewAllLink }: MovieCarouselProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="pl-4 md:pl-10">
      <div className="relative flex flex-col gap-2">
        <div className="flex justify-between items-end mr-10">
          <p className="label">{label}</p>
          <Link href={viewAllLink} className="text-xxs font-medium">
            View All
          </Link>
        </div>
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
