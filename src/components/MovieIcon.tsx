import { Movie } from "@/types/movie";
import Image from "next/image";

export default function MovieIcon({ movie }: { movie: Movie }) {
  return (
    <div className="text-center">
      <Image
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        className="w-[200px] h-[200px]"
        width={200}
        height={300}
        alt={movie.name}
      />
      <h3 className="text-center">{movie.name}</h3>
    </div>
  );
}
