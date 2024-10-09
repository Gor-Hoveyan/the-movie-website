import Link from "next/link";
import Search from "./Search";

export default function Header() {
  return (
    <header className="w-4/5 mx-auto pt-2">
      <div className="flex flex-row justify-between">
        <div className="flex items-center">
          <Link
            href={`/home`}
            className="text-gray-600 font-extrabold text-3xl font-mono"
          >
            TMW
          </Link>
          <Link
            href={`/shows`}
            className="px-20 font-extrabold text-gray-500  text-lg"
          >
            Movies
          </Link>
          <Link
            href={`/movies`}
            className="font-extrabold text-gray-500  text-lg"
          >
            Shows
          </Link>
        </div>
        <Search />
      </div>
    </header>
  );
}
