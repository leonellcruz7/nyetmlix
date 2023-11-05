"use client";
import Hero from "@/components/home/hero/Hero";
import MovieCarousel from "@/components/home/carousel/MovieCarousel";
import Layout from "@/components/layout/Layout";
import MovieModal from "@/components/shared/MovieModal";
import { useAppSelector } from "@/redux/hooks";
import {
  GetFeaturedMovie,
  GetPopularMovies,
  GetTopRatedMovies,
  GetTrendingMovies,
} from "@/components/getters/GetMovies";

export default function Home() {
  const { movieId, popular, trending, topRated } = useAppSelector(
    (state) => state.movie
  );
  return (
    <>
      <GetPopularMovies />
      <GetTrendingMovies />
      <GetTopRatedMovies />
      <GetFeaturedMovie />
      <Layout>
        <div>
          <Hero />
          <div className="flex flex-col gap-10 translate-y-[-100px]">
            <MovieCarousel
              list={popular?.results}
              label="Popular on Nyetmlix"
            />
            <MovieCarousel list={trending?.results} label="Trending Now" />
            <MovieCarousel list={topRated?.results} label="Top Rated" />
          </div>
        </div>
        {movieId && <MovieModal />}
      </Layout>
    </>
  );
}
