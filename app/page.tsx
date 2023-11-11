"use client";
import Hero from "@/components/home/hero/Hero";
import MovieCarousel from "@/components/home/carousel/MovieCarousel";
import Layout from "@/components/layout/Layout";
import MovieModal from "@/components/shared/MovieModal";
import { useAppSelector } from "@/redux/hooks";
import {
  GetFeaturedMovie,
  GetPopularTvSeries,
  GetPopularMovies,
  GetTopRatedMovies,
  GetTrendingMovies,
} from "@/components/getters/GetMovies";
import Loader from "@/components/assets/Loader";
import { motion } from "framer-motion";

export default function Home() {
  const {
    featuredMovie,
    movieId,
    popular,
    trending,
    topRated,
    popularTvSeries,
  } = useAppSelector((state) => state.movie);
  return (
    <>
      <GetPopularMovies />
      <GetTrendingMovies />
      <GetTopRatedMovies />
      <GetFeaturedMovie />
      <GetPopularTvSeries />
      <Layout>
        {!featuredMovie ? (
          <div className="w-screen h-screen">
            <Loader />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <Hero />
            <div className="flex flex-col gap-10 translate-y-[-100px]">
              <MovieCarousel
                viewAllLink="/popular-movies"
                list={popular?.results}
                label="Popular on Nyetmlix"
              />
              <MovieCarousel
                viewAllLink="/trending-movies"
                list={trending?.results}
                label="Trending Now"
              />
              <MovieCarousel
                viewAllLink="/top-rated-movies"
                list={topRated?.results}
                label="Top Rated"
              />
              <MovieCarousel
                viewAllLink="popular-series"
                list={popularTvSeries?.results}
                label="Popular TV Series"
              />
            </div>
          </motion.div>
        )}
        {movieId && <MovieModal />}
      </Layout>
    </>
  );
}
