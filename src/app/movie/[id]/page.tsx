import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import MovieData from "@/components/MovieData";
import { MovieDetails } from "@/types/details";
import { MoviesData } from "@/types/movie";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const movie = await getMovie(params.id);
  const similarMovies = await getSimilarMovies(params.id, 1);
  const recomendations = await getRecomendations(params.id, 1);
  return (
    <div className="w-3/5 mx-auto mt-10">
      <div className="pb-5">
        <h1 className="text-3xl">{movie.title}</h1>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            width={300}
            height={450}
            alt={movie.title}
          />
        </div>
        <div className="pt-2">
          <MovieData movie={movie} />
        </div>
      </div>
      <div className="pt-8">
        <h2 className="text-3xl">Movie overview</h2>
        <p className="pt-2 text-gray-500">{movie.overview}</p>
      </div>
      <div className="pt-4">
        <MovieCarousel
          movies={similarMovies}
          type="movie"
          title="More like this"
        />
        <MovieCarousel
          movies={recomendations}
          type="movie"
          title="Recommended"
        />
      </div>
    </div>
  );
}

async function getMovie(id: string): Promise<MovieDetails> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

async function getSimilarMovies(id: string, page: number): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=${page}&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

async function getRecomendations(
  id: string,
  page: number
): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=${page}&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}
