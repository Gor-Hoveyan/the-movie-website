import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import ShowData from "@/components/ShowData";
import ShowSeason from "@/components/ShowSeason";
import { ShowDetails } from "@/types/details";
import { MoviesData } from "@/types/movie";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const show = await getShow(params.id);
  const similarShows = await getSimilarShows(params.id, 1);
  const recomendations = await getRecomendations(params.id, 1);

  return (
    <div className="lg:w-3/5 mobile:w-full mobile:px-5 mx-auto mt-10 mobile:text-center lg:text-left">
      <div className="pb-5">
        <h1 className="text-3xl">{show.name}</h1>
        <h3 className="text-lg text-gray-600 font-semibold">
          {show.in_production ? "Ongoing" : "Finished"}
        </h3>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="mobile:w-fit mobile:mx-auto lg:mx-0">
          <Image
            src={`https://image.tmdb.org/t/p/w300/${show.poster_path}`}
            width={300}
            height={450}
            alt={show.name}
          />
        </div>
        <div className="pt-2 mobile:w-fit mobile:mx-auto lg:mx-0">
          <ShowData show={show} />
        </div>
      </div>
      <div className="pt-8">
        <h2 className="text-3xl">Series overview</h2>
        <p className="pt-2 text-gray-500">{show.overview}</p>
      </div>
      <div className="pt-5">
        <h2 className="text-3xl">Seasons</h2>
        {show.seasons.map((season, index) => {
          return (
            <ShowSeason
              key={index}
              seasonNumber={season.season_number}
              showId={show.id}
            />
          );
        })}
      </div>
      <div className="w-full p-0">
        <MovieCarousel movies={similarShows} type="tv" title="More like this" />
        <MovieCarousel movies={recomendations} type="tv" title="Recommended" />
      </div>
    </div>
  );
}

async function getShow(id: string): Promise<ShowDetails> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

async function getSimilarShows(id: string, page: number): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=${page}&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

async function getRecomendations(
  id: string,
  page: number
): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=${page}&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}
