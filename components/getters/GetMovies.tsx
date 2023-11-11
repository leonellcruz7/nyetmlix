"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setFeaturedMovie,
  setMovieDetails,
  setPopularMovies,
  setPopularTvSeries,
  setTopRatedMovies,
  setTrendingMovies,
} from "@/redux/movie";
import {
  getFeaturedMovie,
  getPopularTvSeries,
  getMovieDetails,
  getMovieProviders,
  getMovieRecommendations,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  searchMovies,
} from "@/requests/movie";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export const GetPopularMovies = () => {
  const dispatch = useAppDispatch();
  const params = useSearchParams();
  const page = params.get("page");
  const { popular } = useAppSelector((state) => state.movie);
  useEffect(() => {
    if (!popular || popular.page.toString() !== page) {
      dispatch(setPopularMovies(null));
      getPopularMovies({ dispatch, page });
    }
  }, [page]);
  return null;
};
export const GetFeaturedMovie = () => {
  const dispatch = useAppDispatch();
  const { featuredMovie } = useAppSelector((state) => state.movie);
  useEffect(() => {
    dispatch(setFeaturedMovie(null));
    if (!featuredMovie) {
      getFeaturedMovie({ dispatch });
    }
  }, []);
  return null;
};

export const GetTrendingMovies = () => {
  const dispatch = useAppDispatch();
  const params = useSearchParams();
  const page = params.get("page");
  const { trending } = useAppSelector((state) => state.movie);
  useEffect(() => {
    if (!trending || trending.page.toString() !== page) {
      dispatch(setTrendingMovies(null));
      getTrendingMovies({ dispatch, page });
    }
  }, [page]);
  return null;
};

export const GetPopularTvSeries = () => {
  const dispatch = useAppDispatch();
  const params = useSearchParams();
  const page = params.get("page");
  const { popularTvSeries } = useAppSelector((state) => state.movie);
  useEffect(() => {
    if (!popularTvSeries || popularTvSeries.page.toString() !== page) {
      dispatch(setPopularTvSeries(null));
      getPopularTvSeries({ dispatch, page });
    }
  }, [page]);
  return null;
};

export const GetTopRatedMovies = () => {
  const dispatch = useAppDispatch();
  const params = useSearchParams();
  const page = params.get("page");
  const { topRated } = useAppSelector((state) => state.movie);
  useEffect(() => {
    if (!topRated || topRated.page.toString() !== page) {
      dispatch(setTopRatedMovies(null));
      getTopRatedMovies({ dispatch, page });
    }
  }, [page]);
  return null;
};

export const GetRecommendedMovies = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const { movieId } = useAppSelector((state) => state.movie);
  const id = movieId || params.movieid;
  useEffect(() => {
    getMovieRecommendations({ dispatch, id });
  }, []);
  return null;
};

export const GetMovieDetails = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { movieId, movieDetails } = useAppSelector((state) => state.movie);
  const id = movieId || params.movieid;
  useEffect(() => {
    dispatch(setMovieDetails(null));
    if (id) {
      getMovieDetails({ dispatch, id: id });
    }
  }, [id]);
  return null;
};

export const GetSearchedMovies = ({ search }: { search: string | null }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setMovieDetails(null));
    searchMovies({ dispatch, search });
  }, [search]);
  return null;
};

export const GetMovieProvider = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params.movieid;
  useEffect(() => {
    getMovieProviders({ dispatch, id });
  }, [id]);
  return null;
};
