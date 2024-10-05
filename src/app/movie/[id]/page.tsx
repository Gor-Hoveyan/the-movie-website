import { MovieDetails } from "@/types/details";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const movie = await getMovie(params.id);
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        width={500}
        height={750}
        alt={movie.title}
      />
    </div>
  );
}

async function getMovie(id: string): Promise<MovieDetails> {
  const data: Promise<Response> = fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=fb1c9bd7dc22cbc5831bea8ce17ea69e`
  );
  return (await data).json();
}
