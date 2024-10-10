import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import { MoviesData } from "@/types/movie";

export default async function Home() {
  const popularShows = await getPopularShows();
  const airingShows = await getAiringShows();
  const onAirShows = await getShowsOnAir();
  const topRatedShows = await getTopRatedShows();
  return (
    <div className="lg:w-4/5 mobile:w-full mobile:px-5 mx-auto">
      <MovieCarousel movies={topRatedShows} title="Top rated" type="tv" />
      <MovieCarousel movies={popularShows} title="Popular" type="tv" />
      <MovieCarousel movies={airingShows} title="Airing today" type="tv" />
      <MovieCarousel movies={onAirShows} title="Aired on this week" type="tv" />
    </div>
  );
}

async function getPopularShows(): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

async function getAiringShows(): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

async function getShowsOnAir(): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

async function getTopRatedShows(): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

//https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1
