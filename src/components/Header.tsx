import Link from "next/link";
import Search from "./Search";

export default function Header() {
  return (
    <header className="w-4/5 mx-auto pt-2">
      <div className="flex flex-row justify-between">
        <Link
          href={`/home`}
          className="text-gray-500 font-extrabold text-3xl font-mono"
        >
          TMW
        </Link>
        <Search />
      </div>
    </header>
  );
}
