import numberWithCommas from "@/app/utils/numberWithCommas";
import { MovieDetails } from "@/types/details";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const movie = await getMovie(params.id);
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
          <table className="w-full">
            <tbody>
              <tr>
                <td>Rating: </td>
                <td>{movie.vote_average.toString().slice(0, 3)}</td>
              </tr>
              {movie.belongs_to_collection ? (
                <tr>
                  <td>Collection: </td>
                  <td>{movie.belongs_to_collection.name}</td>
                </tr>
              ) : (
                ""
              )}
              <tr>
                <td>Tagline: </td>
                <td>{movie.tagline}</td>
              </tr>
              <tr>
                <td>Launch: </td>
                <td>{movie.release_date}</td>
              </tr>
              <tr>
                <td>Runtime: </td>
                <td>{movie.runtime} minutes.</td>
              </tr>
              {movie.budget ? (
                <tr>
                  <td>Budget: </td>
                  <td>{numberWithCommas(movie.budget)} $</td>
                </tr>
              ) : (
                ""
              )}
              {movie.revenue ? (
                <tr>
                  <td>Revenue: </td>
                  <td>{numberWithCommas(movie.revenue)} $</td>
                </tr>
              ) : (
                ""
              )}
              <tr>
                <td>Country: </td>
                <td>
                  {movie.origin_country.map((country, index) => {
                    if (index !== movie.origin_country.length - 1) {
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
                  {movie.spoken_languages.map((language, index) => {
                    if (index !== movie.spoken_languages.length - 1) {
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
                  {movie.genres.map((genre, index) => {
                    if (index !== movie.genres.length - 1) {
                      return genre.name + ", ";
                    } else {
                      return genre.name + ".";
                    }
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="pt-8">
        <h2 className="text-3xl">Movie overview</h2>
        <p className="pt-2 text-gray-500">{movie.overview}</p>
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
