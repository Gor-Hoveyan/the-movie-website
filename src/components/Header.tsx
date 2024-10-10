import Link from "next/link";
import Search from "./Search";

export default function Header() {
  return (
    <header className="mt-auto lg:w-4/5 mobile:w-full  mx-auto pt-2 border-b border-opacity-10 dark:border-white border-black dark:border-opacity-10">
      <div className="flex flex-row lg:justify-between mobile:justify-center">
        <div className="flex items-center ">
          <Link
            href={`/home`}
            className="text-gray-600 font-extrabold text-3xl font-mono"
          >
            TMW
          </Link>
          <Link
            href={`/shows`}
            className="px-20 font-bold text-gray-500 text-lg "
          >
            Shows
          </Link>
          <Link href={`/movies`} className="font-bold text-gray-500 text-lg">
            Movies
          </Link>
        </div>
        <div className="mobile:hidden md:block">
          <Search />
        </div>
      </div>
    </header>
  );
}
