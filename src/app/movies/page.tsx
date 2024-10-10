import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import { MoviesData } from "@/types/movie";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const playingNow = await getPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  return (
    <div className="lg:w-4/5 mobile:w-full mobile:px-5 mx-auto">
      <MovieCarousel movies={topRatedMovies} title="Top rated" type="movie" />

      <MovieCarousel movies={popularMovies} title="Popular" type="movie" />
      <MovieCarousel movies={playingNow} title="Playing now" type="movie" />
      <MovieCarousel movies={upcomingMovies} title="Upcoming" type="movie" />
    </div>
  );
}

async function getPopularMovies(): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

async function getPlayingMovies(): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

async function getUpcomingMovies(): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

async function getTopRatedMovies(): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}
