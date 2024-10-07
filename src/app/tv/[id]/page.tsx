import ShowSeason from "@/components/ShowSeason";
import { ShowDetails } from "@/types/details";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const show = await getShow(params.id);
  return (
    <div className="w-3/5 mx-auto mt-10">
      <div className="pb-5">
        <h1 className="text-3xl">{show.name}</h1>
        <h3 className="text-lg text-gray-600 font-semibold">
          {show.in_production ? "Ongoing" : "Finished"}
        </h3>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/w300/${show.poster_path}`}
            width={300}
            height={450}
            alt={show.name}
          />
        </div>
        <div className="pt-2">
          <table className="w-full">
            <tbody>
              <tr>
                <td>Rating: </td>
                <td>{show.vote_average.toString().slice(0, 3)}</td>
              </tr>
              <tr>
                <td>Tagline: </td>
                <td>{show.tagline}</td>
              </tr>
              <tr>
                <td>Launch: </td>
                <td>{show.first_air_date}</td>
              </tr>
              {!show.in_production && (
                <tr>
                  <td>Finish: </td>
                  <td>{show.last_air_date}</td>
                </tr>
              )}
              <tr>
                <td>Created by: </td>
                <td>
                  {show.created_by.map((author, index) => {
                    if (index !== show.created_by.length - 1) {
                      return author.name + ", ";
                    } else {
                      return author.name + ".";
                    }
                  })}
                </td>
              </tr>
              {show.networks.length ? (
                <tr>
                  <td>Network: </td>
                  <td>
                    {show.networks.map((network, index) => {
                      if (index !== show.networks.length - 1) {
                        return network.name + ", ";
                      } else {
                        return network.name + ".";
                      }
                    })}
                  </td>
                </tr>
              ) : (
                ""
              )}
              <tr>
                <td>Country: </td>
                <td>
                  {show.origin_country.map((country, index) => {
                    if (index !== show.origin_country.length - 1) {
                      return country + ", ";
                    } else {
                      return country + ".";
                    }
                  })}
                </td>
              </tr>
              <tr>
                <td>Language: </td>
                <td>
                  {" "}
                  {show.spoken_languages.map((language, index) => {
                    if (index !== show.spoken_languages.length - 1) {
                      return language.name + ", ";
                    } else {
                      return language.name + ".";
                    }
                  })}
                </td>
              </tr>
              <tr>
                <td>Genre: </td>
                <td>
                  {show.genres.map((genre, index) => {
                    if (index !== show.genres.length - 1) {
                      return genre.name + ", ";
                    } else {
                      return genre.name + ".";
                    }
                  })}
                </td>
              </tr>
              <tr>
                <td>Seasons: </td>
                <td>{show.number_of_seasons}</td>
              </tr>
              <tr>
                <td>Episodes: </td>
                <td>{show.number_of_episodes}</td>
              </tr>
            </tbody>
          </table>
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
    </div>
  );
}

async function getShow(id: string): Promise<ShowDetails> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}
