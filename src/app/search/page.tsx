"use client";
import MovieList from "@/components/MovieList";
import { MoviesData } from "@/types/movie";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const [moviesData, setMoviesData] = useState<MoviesData | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const query = searchParams.get("query");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/${category}?query=${query}&include_adult=false&language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
    )
      .then((res) => res.json())
      .then((data) => {
        setMoviesData(data);
        console.log(data);
        setTotalPages(data.total_pages);
        setCurrentPage((currentPage) => currentPage + 1);
      });
  }, []);

  async function fetchMore() {
    console.log(totalPages, currentPage);
    if (totalPages > currentPage) {
      fetch(
        `https://api.themoviedb.org/3/search/${category}?query=${query}&include_adult=false&language=en-US&page=${currentPage}&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
      )
        .then((res) => res.json())
        .then((data) => {
          const mData = moviesData;
          mData?.results.push(...data.results);
          setMoviesData(mData);
          setCurrentPage((currentPage) => currentPage + 1);
        });
    }
  }

  return (
    <div className="w-4/5 mx-auto text-center">
      {moviesData && category ? (
        <MovieList movies={moviesData} type={category} />
      ) : (
        ""
      )}
      {totalPages > currentPage ? (
        <button
          className="px-5 py-1 bg-blue-500 mx-auto rounded-lg my-16"
          onClick={() => fetchMore()}
        >
          Load more
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
