import { ShowDetails } from "@/types/details";

export default function ShowData({ show }: { show: ShowDetails }) {
  return (
    <table className="w-full">
      <tbody>
        <tr>
          <td>Rating: </td>
          <td>{show.vote_average.toString().slice(0, 3)}</td>
        </tr>
        {show.tagline ? (
          <tr>
            <td>Tagline: </td>
            <td>{show.tagline}</td>
          </tr>
        ) : (
          ""
        )}
        <tr>
          <td>Launch: </td>
          <td>{show.first_air_date}</td>
        </tr>
        {!show.in_production && (
          <tr>
            <td>Finished: </td>
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
  );
}
