"use client";
import AllList from "@/components/all/AllList";
import {
  GetPopularMovies,
  GetPopularTvSeries,
  GetTopRatedMovies,
  GetTrendingMovies,
} from "@/components/getters/GetMovies";
import Layout from "@/components/layout/Layout";
import Pagination from "@/components/pagination/Pagination";
import { useParams } from "next/navigation";
import React from "react";

const All = () => {
  const params: { all: string } = useParams();
  const type = params.all;
  const types: any = {
    "popular-movies": <GetPopularMovies />,
    "trending-movies": <GetTrendingMovies />,
    "top-rated-movies": <GetTopRatedMovies />,
    "popular-series": <GetPopularTvSeries />,
  };
  return (
    <>
      {types[type]}
      <Layout>
        <div className="pt-32 main-container flex flex-col gap-12">
          <div className="flex justify-between items-end">
            <p className="capitalize text-4xl text-white font-bold">{type}</p>
            <Pagination />
          </div>
          <AllList />
        </div>
      </Layout>
    </>
  );
};

export default All;
