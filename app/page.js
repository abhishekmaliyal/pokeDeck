import Topbar from "@/components/Topbar";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Topbar/>
      <div className="hero-text">
        <div className="hero title w-screen h-max pt-40 px-40 text-9xl">
          Get To Know Your Pokémon ...
        </div>
        <div className=" pokemons-images  flex items-center justify-start px-40 pt-10">
          <Image width={800} height={800} alt="pokemon image" src="/pokemon.png"></Image>
          <div className="search flex items-end justify-start py-8 px-20 w-[50%] mx-20 h-80">
            <Link href="pages/SearchPage">
              <button className="rounded-3xl border-2 border-purple-600 bg-purple-300 h-20 w-60 text-xl ">
                Search Pokémon ➜
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
