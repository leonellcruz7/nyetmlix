"use client";
import React from "react";
import Modal from "../assets/modal/Modal";
import { useDispatch } from "react-redux";
import { setMovieId, setViewType } from "@/redux/movie";
import Link from "next/link";
import { GetMovieDetails } from "../getters/GetMovies";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Loader from "../assets/Loader";

const MovieModal = () => {
  const dispatch = useDispatch();
  const { movieDetails, viewType } = useAppSelector((state) => state.movie);

  const handleClose = () => {
    dispatch(setMovieId(null));
    dispatch(setViewType(null));
  };
  return (
    <>
      <GetMovieDetails />
      <Modal handleClose={handleClose}>
        <div className="w-[800px] h-[90vh] overflow-y-scroll hide-scroll bg-zinc-900 rounded-xl overflow-hidden flex flex-col justify-between">
          {movieDetails ? (
            <>
              <div>
                <div className="w-full h-[450px]">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    src={
                      process.env.NEXT_PUBLIC_IMAGE_URL +
                      movieDetails?.backdrop_path
                    }
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <p className="font-bold text-white text-3xl">
                    {movieDetails?.title}
                  </p>
                  <p className="text-slate-500">{movieDetails?.overview}</p>
                  <div className="flex gap-2 items-start">
                    <p className="font-semibold text-white">Genre:</p>
                    <div className="flex gap-x-1 text-slate-500">
                      {movieDetails?.genres?.map((item, index) => {
                        const isLast =
                          movieDetails?.genres.length - 1 === index;
                        const { id, name } = item;
                        return (
                          <div key={index}>
                            <p>
                              {name}
                              {!isLast && <span>,</span>}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Link
                  onClick={() => dispatch(setMovieId(null))}
                  href={`/watch/${movieDetails?.id}`}
                  className="button white"
                >
                  Play
                </Link>
              </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
      </Modal>
    </>
  );
};

export default MovieModal;
