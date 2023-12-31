"use client";
import { GetSearchedMovies } from "@/components/getters/GetMovies";
import Layout from "@/components/layout/Layout";
import MovieCard from "@/components/shared/MovieCard";
import MovieModal from "@/components/shared/MovieModal";
import { useAppSelector } from "@/redux/hooks";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const { movieId, searchList } = useAppSelector((state) => state.movie);
  const query = useSearchParams();
  const search = query.get("search");

  return (
    <>
      <GetSearchedMovies search={search} />
      <Layout>
        <div className="main-container pt-32">
          <div className="flex flex-col gap-10">
            <p className="text-4xl text-white font-bold">
              Search result for {search}
            </p>
            <div className="flex flex-wrap gap-10">
              {searchList
                ?.filter((res) => res.backdrop_path)
                .map((item, index) => {
                  return <MovieCard poster key={index} data={item} large />;
                })}
            </div>
          </div>
        </div>
      </Layout>
      {movieId && <MovieModal />}
    </>
  );
};

export default Search;
