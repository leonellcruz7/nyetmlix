import { MovieStateTypes } from "@/types/movie.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MovieStateTypes = {
  movieId: null,
  popular: null,
  trending: null,
  topRated: null,
  movieDetails: null,
  searchedMovies: null,
  recommendedMovies: null,
  featuredMovie: null,
  popularTvSeries: null,
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
    setRecommendedMovies: (state, action) => {
      state.recommendedMovies = action.payload;
    },
    setFeaturedMovie: (state, action) => {
      state.featuredMovie = action.payload;
    },
    setPopularTvSeries: (state, action) => {
      state.popularTvSeries = action.payload;
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
  setRecommendedMovies,
  setFeaturedMovie,
  setPopularTvSeries,
} = movieSlice.actions;
export default movieSlice.reducer;
