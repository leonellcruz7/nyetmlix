"use client";
import AllList from "@/components/all/AllList";
import {
  GetFeaturedMovie,
  GetPopularMovies,
  GetPopularTvSeries,
  GetTopRatedMovies,
  GetTrendingMovies,
} from "@/components/getters/GetMovies";
import Layout from "@/components/layout/Layout";
import Pagination from "@/components/pagination/Pagination";
import { replaceHyphenWithSpace } from "@/utils/helpers";
import { useParams } from "next/navigation";
import React from "react";

const All = () => {
  const params = useParams();
  const type = params.all;

  return (
    <>
      <GetPopularMovies />
      <GetTrendingMovies />
      <GetTopRatedMovies />
      <GetFeaturedMovie />
      <GetPopularTvSeries />
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
