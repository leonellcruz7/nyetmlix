import { MovieStateTypes } from "@/types/movie.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MovieStateTypes = {
  movieId: null,
  popular: null,
  trending: null,
  topRated: null,
  movieDetails: null,
  searchedMovies: null,
  searchedSeries: null,
  searchList: [],
  recommendedMovies: null,
  featuredMovie: null,
  popularTvSeries: null,
  viewType: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieId: (state, action) => {
      state.movieId = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popular = action.payload;
    },
    setTrendingMovies: (state, action) => {
      state.trending = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    setSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
    setSearchedSeries: (state, action) => {
      state.searchedSeries = action.payload;
    },
    setSearchList: (state, action) => {
      state.searchList = action.payload;
    },
    setRecommendedMovies: (state, action) => {
      state.recommendedMovies = action.payload;
    },
    setFeaturedMovie: (state, action) => {
      state.featuredMovie = action.payload;
    },
    setPopularTvSeries: (state, action) => {
      state.popularTvSeries = action.payload;
    },
    setViewType: (state, action) => {
      state.viewType = action.payload;
    },
  },
});

export const {
  setMovieId,
  setPopularMovies,
  setTrendingMovies,
  setTopRatedMovies,
  setMovieDetails,
  setSearchedMovies,
  setSearchedSeries,
  setSearchList,
  setRecommendedMovies,
  setFeaturedMovie,
  setPopularTvSeries,
  setViewType,
} = movieSlice.actions;
export default movieSlice.reducer;
