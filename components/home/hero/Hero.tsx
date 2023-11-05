"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setMovieId } from "@/redux/movie";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const dispatch = useAppDispatch();
  const { featuredMovie } = useAppSelector((state) => state.movie);
  const image =
    process.env.NEXT_PUBLIC_IMAGE_URL + featuredMovie?.backdrop_path;
  return (
    <div
      className="relative h-[80vh] flex items-center"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="main-container flex flex-col gap-4">
        <p className="font-bold text-6xl text-white">{featuredMovie?.title}</p>
        <p className="xl:max-w-[35%] text-white text-xl">
          {featuredMovie?.overview}
        </p>
        <div className="flex gap-4">
          <Link href={`/watch/${featuredMovie?.id}`} className="button white">
            Play
          </Link>
          <button
            onClick={() => dispatch(setMovieId(featuredMovie?.id))}
            className="button grey"
          >
            More Info
          </button>
        </div>
      </div>
      {/* <Image
        width={1000}
        height={1000}
        alt=""
        src={featuredMovie?.backdrop_path}
      /> */}
    </div>
  );
};

export default Hero;
