import { api } from "@/api/api";
import {
  setMovieDetails,
  setPopularMovies,
  setRecommendedMovies,
  setSearchedMovies,
  setTopRatedMovies,
  setTrendingMovies,
} from "@/redux/movie";

export const getPopularMovies = async ({ dispatch }: any) => {
  try {
    const response = await api.get(`/movie/popular`);
    console.log(response, "popular");
    dispatch(setPopularMovies(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const getTrendingMovies = async ({ dispatch }: any) => {
  try {
    const response = await api.get(`/trending/movie/day`);
    console.log(response, "trending");
    dispatch(setTrendingMovies(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const getTopRatedMovies = async ({ dispatch }: any) => {
  try {
    const response = await api.get(`/movie/top_rated`);
    console.log(response, "trending");
    dispatch(setTopRatedMovies(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const getMovieDetails = async ({ dispatch, id }: any) => {
  try {
    const response = await api.get(`/movie/${id}`);
    console.log(response, "movie details");
    dispatch(setMovieDetails(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const searchMovies = async ({ dispatch, search }: any) => {
  try {
    const response = await api.get(`/search/movie?query=${search}`);
    console.log(response, "searched movies");
    dispatch(setSearchedMovies(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const getMovieProviders = async ({ dispatch, id }: any) => {
  try {
    const response = await api.get(`/movie/${id}/videos`);
    console.log(response, "movie provider");
  } catch (err) {
    console.log(err);
  }
};

export const getMovieRecommendations = async ({ id, dispatch }: any) => {
  try {
    const response = await api.get(`/movie/${id}/similar`);
    console.log(response, "recommended movies");
    dispatch(setRecommendedMovies(response.data));
  } catch (err) {
    console.log(err);
  }
};
