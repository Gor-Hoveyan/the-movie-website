import MovieIcon from "@/components/MovieIcon";
import { MoviesData } from "@/types/movie";
import { headers } from "next/headers";

export default async function Page() {
  let results: MoviesData | undefined;
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  console.log(fullUrl);
  const category = fullUrl.split("category=")[1].split("&")[0];
  const query = fullUrl.split("query=")[1];
  results = await getData(category, query);

  console.log(results);
  return (
    <div>
      {results?.results.map((movie, index) => {
        return <MovieIcon movie={movie} type={category} key={index} />;
      })}
    </div>
  );
}

async function getData(category: string, query: string): Promise<MoviesData> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/search/${category}?query=${query}&include_adult=false&language=en-US&page=1&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}

// https://api.themoviedb.org/3/search/movie?query=s&include_adult=false&language=en-US&page=1
