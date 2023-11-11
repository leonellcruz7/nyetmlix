export type MovieDataTypes = {
  page: number;
  results: MovieTypes[];
  total_pages: number;
  total_results: number;
};

export type MovieStateTypes = {
  movieId: null | number;
  popular: null | MovieDataTypes;
  trending: null | MovieDataTypes;
  topRated: null | MovieDataTypes;
  movieDetails: null | MovieDetailsTypes;
  searchedMovies: null | MovieDataTypes;
  featuredMovie: null | MovieDetailsTypes;
  recommendedMovies: null | MovieDataTypes;
  popularTvSeries: null | MovieDataTypes;
};

export type MovieTypes = {
  id: number;
  backdrop_path: string;
  adult: boolean;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type GenreTypes = {
  id: number;
  name: string;
};

export type MovieDetailsTypes = {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: GenreTypes[];
  homepage: string;
  id: number;
  imdb_id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type MovieCarouselProps = {
  label: string;
  list?: MovieTypes[];
  viewAllLink: string;
};
