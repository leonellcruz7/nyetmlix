"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setMovieDetails } from "@/redux/movie";
import {
  getFeaturedMovie,
  getMovieDetails,
  getMovieProviders,
  getMovieRecommendations,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  searchMovies,
} from "@/requests/movie";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

export const GetPopularMovies = () => {
  const dispatch = useAppDispatch();
  const { popular } = useAppSelector((state) => state.movie);
  useEffect(() => {
    if (!popular) {
      getPopularMovies({ dispatch });
    }
  }, []);
  return null;
};
export const GetFeaturedMovie = () => {
  const dispatch = useAppDispatch();
  const { featuredMovie } = useAppSelector((state) => state.movie);
  useEffect(() => {
    if (!featuredMovie) {
      getFeaturedMovie({ dispatch });
    }
  }, []);
  return null;
};

export const GetTrendingMovies = () => {
  const dispatch = useAppDispatch();
  const { trending } = useAppSelector((state) => state.movie);
  useEffect(() => {
    if (!trending) {
      getTrendingMovies({ dispatch });
    }
  }, []);
  return null;
};

export const GetTopRatedMovies = () => {
  const dispatch = useAppDispatch();
  const { trending } = useAppSelector((state) => state.movie);
  useEffect(() => {
    if (!trending) {
      getTopRatedMovies({ dispatch });
    }
  }, []);
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
