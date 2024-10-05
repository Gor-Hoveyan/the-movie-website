import { Movie } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";

export default function MovieIcon({
  movie,
  type,
}: {
  movie: Movie;
  type?: string | undefined;
}) {
  return (
    <div className="text-center">
      <Link href={`/${movie.media_type ? movie.media_type : type}/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          className="w-[200px] h-[200px]"
          width={200}
          height={300}
          alt={movie.name ? movie.name : movie.title || ""}
        />
        <h3 className="text-center">
          {movie.name ? movie.name : movie.title || ""}
        </h3>
      </Link>
    </div>
  );
}
