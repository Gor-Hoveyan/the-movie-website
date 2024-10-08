import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import { MoviesData } from "@/types/movie";

export default async function Home() {
  const top = await getTop();
  const popularMovies = await getPopularMovies();
  const popularShows = await getPopularShows();
  const playingNow = await getPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  return (
    <div className="w-4/5 mx-auto">
      <MovieCarousel movies={top} title="Trending" />
      <MovieCarousel
        movies={popularMovies}
        title="Popular Movies"
        type="movie"
      />
      <MovieCarousel movies={popularShows} title="Popular TV Shows" type="tv" />
      <MovieCarousel movies={playingNow} title="Playing now" type="movie" />
      <MovieCarousel movies={playingNow} title="Upcoming" type="movie" />
    </div>
  );
}

async function getTop(): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/trending/all/week?language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

async function getPopularMovies(): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

async function getPopularShows(): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
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
