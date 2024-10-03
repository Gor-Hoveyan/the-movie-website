import Carousel from "@/components/Carousel";
import MovieIcon from "@/components/MovieIcon";
import { Movie, MoviesData } from "@/types/movie";

export default async function Home() {
  const movies = await getTopMovies();

  return (
    <div>
      <div className="w-4/5 mx-auto">
        <Carousel>
          {movies.results.map((movie: Movie, index: number) => {
            return (
              <div key={index} className="embla__slide">
                <MovieIcon movie={movie} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

async function getTopMovies(): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}
