import { api } from "@/api/api";
import {
  setFeaturedMovie,
  setMovieDetails,
  setPopularMovies,
  setPopularTvSeries,
  setRecommendedMovies,
  setSearchList,
  setSearchedMovies,
  setSearchedSeries,
  setTopRatedMovies,
  setTrendingMovies,
} from "@/redux/movie";

export const getPopularMovies = async ({ dispatch, page }: any) => {
  const params = {
    page: page,
  };
  try {
    const response = await api.get(`/movie/popular`, {
      params: params,
    });
    console.log(response, "popular");
    dispatch(setPopularMovies(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const getFeaturedMovie = async ({ dispatch }: any) => {
  try {
    const response = await api.get(`/movie/968051`);
    console.log(response, "featured");
    dispatch(setFeaturedMovie(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const getTrendingMovies = async ({ dispatch, page }: any) => {
  const params = {
    page: page,
  };
  try {
    const response = await api.get(`/trending/movie/day`, {
      params: params,
    });
    console.log(response, "trending");
    dispatch(setTrendingMovies(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const getPopularTvSeries = async ({ dispatch, page }: any) => {
  const params = {
    page: page,
  };
  try {
    const response = await api.get(`/tv/popular`, {
      params: params,
    });
    console.log(response, "popular tv series");
    dispatch(setPopularTvSeries(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const getTopRatedMovies = async ({ dispatch, page }: any) => {
  const params = {
    page: page,
  };
  try {
    const response = await api.get(`/movie/top_rated`, {
      params: params,
    });
    console.log(response, "trending");
    dispatch(setTopRatedMovies(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const getMovieDetails = async ({ dispatch, id, viewType }: any) => {
  try {
    const response = await api.get(`/${viewType || "movie"}/${id}`);
    console.log(response, "movie details");
    dispatch(setMovieDetails(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const searchMovies = async ({ dispatch, search }: any) => {
  try {
    const response = await api.get(`/search/movie?query=${search}`);
    const response2 = await api.get(`/search/tv?query=${search}`);
    console.log(response, "searched movies");
    console.log(response2, "searched series");
    dispatch(setSearchedMovies(response.data));
    dispatch(setSearchedSeries(response2.data));
    // dispatch(
    //   setSearchList([...response.data.results, ...response2.data.results])
    // );

    dispatch(setSearchList([...response.data.results]));
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
