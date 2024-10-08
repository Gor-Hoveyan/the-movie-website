import { MovieDetails } from "@/types/details";
import numberWithCommas from "@/app/utils/numberWithCommas";

export default function MovieData({ movie }: { movie: MovieDetails }) {
  return (
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
        {movie.tagline ? (
          <tr>
            <td>Tagline: </td>
            <td>{movie.tagline}</td>
          </tr>
        ) : (
          ""
        )}
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
        {movie.homepage ? (
          <tr>
            <td>Homepage: </td>
            <td>
              <a
                href={movie.homepage}
                className="text-blue-500 underline"
                target="_blank"
              >
                Link
              </a>
            </td>
          </tr>
        ) : (
          ""
        )}
      </tbody>
    </table>
  );
}
