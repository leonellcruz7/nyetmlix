"use client";
import Loader from "@/components/assets/Loader";
import {
  GetMovieDetails,
  GetMovieProvider,
  GetRecommendedMovies,
} from "@/components/getters/GetMovies";
import Layout from "@/components/layout/Layout";
import MovieCard from "@/components/shared/MovieCard";
import MovieModal from "@/components/shared/MovieModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setMovieDetails, setMovieId } from "@/redux/movie";
import { MovieDetailsTypes } from "@/types/movie.types";
import { formatDate } from "@/utils/helpers";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Watch = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { recommendedMovies, movieId, movieDetails } = useAppSelector(
    (state) => state.movie
  );
  const keys = movieDetails && Object.keys(movieDetails);
  const isTv = keys?.includes("seasons");

  return (
    <>
      <GetMovieDetails />
      <GetRecommendedMovies />
      <Layout>
        <div>
          {isTv ? (
            <iframe
              allowFullScreen
              src={
                process.env.NEXT_PUBLIC_STREAM_URL_TV +
                `?tmdb=${params.movieid}`
              }
              className="w-full h-[90vh]"
            ></iframe>
          ) : (
            <iframe
              allowFullScreen
              src={
                process.env.NEXT_PUBLIC_STREAM_URL + `?tmdb=${params.movieid}`
              }
              className="w-full h-[90vh]"
            ></iframe>
          )}
          {movieDetails ? (
            <>
              <div className="main-container py-10 flex justify-between">
                <div className="flex gap-10">
                  <div className="w-[300px] h-[400px] overflow-hidden flex items-center justify-center bg-slate-300">
                    <Image
                      width={300}
                      height={400}
                      alt=""
                      src={
                        process.env.NEXT_PUBLIC_IMAGE_URL +
                        movieDetails?.poster_path
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-4xl font-semibold">
                      {movieDetails?.title}
                    </p>
                    <p className="max-w-[800px]">{movieDetails?.overview}</p>
                    <div>
                      <div className="flex gap-2">
                        <p className="font-bold">Release Date:</p>
                        <p>
                          {movieDetails?.release_date &&
                            formatDate(movieDetails?.release_date)}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <p className="font-bold">Genres:</p>
                        <div className="flex gap-2">
                          {movieDetails?.genres?.map((item, index) => {
                            return <p key={index}>{item.name}</p>;
                          })}
                        </div>
                      </div>
                      {/* <div className="flex gap-2">
                        <p className="font-bold">Casts:</p>
                        <p>June 20, 2022</p>
                      </div>
                      <div className="flex gap-2">
                        <p className="font-bold">Duration:</p>
                        <p>June 20, 2022</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-container flex flex-col gap-8">
                <p className="text-4xl font-semibold">You may also like</p>
                <div className="flex flex-wrap gap-10">
                  {recommendedMovies?.results
                    ?.filter((item) => item.poster_path !== null)
                    .map((item, index) => {
                      return (
                        <MovieCard
                          type="movie"
                          key={index}
                          poster
                          data={item}
                        />
                      );
                    })}
                </div>
              </div>
            </>
          ) : (
            <div className="h-[500px] flex items-center">
              <Loader />
            </div>
          )}
        </div>
        {movieId && <MovieModal />}
      </Layout>
    </>
  );
};

export default Watch;
