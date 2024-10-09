import { MoviesData } from "@/types/movie";
import MovieIcon from "./MovieIcon";

export default function MovieList({
  type,
  movies,
}: {
  type: string;
  movies: MoviesData;
}) {
  return (
    <div className="mx-auto grid grid-cols-5 pt-5">
      {movies.results.map((movie, index) => {
        return (
          <div key={index} className="pt-5 text-left max-w-[200px]">
            <MovieIcon movie={movie} type={type} />
          </div>
        );
      })}
    </div>
  );
}
