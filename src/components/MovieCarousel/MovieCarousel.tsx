import { Movie, MoviesData } from "@/types/movie";
import Carousel from "./../Carousel";
import MovieIcon from "./../MovieIcon";
import styles from "./MovieCarousel.module.css";

export default function MovieCarousel({
  movies,
  title,
  type,
}: {
  movies: MoviesData;
  title: string;
  type?: string | undefined;
}) {
  return (
    <div className="mx-auto pt-5">
      {movies.results.length ? (
        <>
          <h2 className="text-2xl px-5 py-1 my-2 border-l-4 border-blue-500 rounded-sm">
            {title}
          </h2>
          <Carousel>
            {movies.results.map((movie: Movie, index: number) => {
              return (
                <div
                  key={index}
                  className={`embla__slide ${styles.embla__slide}`}
                >
                  <MovieIcon movie={movie} type={type} />
                </div>
              );
            })}
          </Carousel>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
