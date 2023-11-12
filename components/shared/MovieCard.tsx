"use client";

import classNames from "classnames";
import React from "react";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { setMovieId, setViewType } from "@/redux/movie";
import { MovieTypes } from "@/types/movie.types";
type MovieCardProps = {
  large?: boolean;
  data: MovieTypes;
  poster?: boolean;
  type?: string;
};

const MovieCard = ({ large, data, poster, type }: MovieCardProps) => {
  const dispatch = useAppDispatch();
  const handleSelect = () => {
    dispatch(setMovieId(data?.id));
    dispatch(setViewType(type));
  };
  return (
    <div
      onClick={handleSelect}
      className={classNames(
        "flex flex-col gap-2 w-[260px]",
        large && "w-[350px]",
        poster && "w-[300px]"
      )}
    >
      <div
        className={classNames(
          "flex overflow-hidden rounded-md w-[260px] h-[155px] snap-start cursor-pointer items-center justify-center",
          large && "w-[350px] h-[230px]",
          poster && "w-[300px] h-[450px]"
        )}
      >
        <Image
          className="flex-shrink-0 w-full h-full object-cover"
          width={500}
          height={500}
          alt=""
          src={
            process.env.NEXT_PUBLIC_IMAGE_URL +
            (poster ? data?.poster_path : data?.backdrop_path)
          }
        />
      </div>
      {/* {(data?.title || data?.name) && (
        <p className="text-white font-semibold text-xl">
          {data?.title || data?.name}
        </p>
      )} */}
    </div>
  );
};

export default MovieCard;
