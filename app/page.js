import PokemonData from "@/components/PokemonData";
import Image from "next/image";
import searchball from "@/app/searchball.png"

export default function Page() {
    return (
        <>
            <div className="fixed inset-x-4 my-6 mx-20 rounded-2xl">
                <nav className="p-4 bg-white flex items-center justify-between rounded-2xl">
                    <h1 className="title text-3xl">Pokémon</h1>
                    <ul className="flex">
                        <li>
                            <a href="">this is a link</a>
                        </li>
                        <li>
                            <a href="">this is a link</a>
                        </li>
                        <li>
                            <a href="">this is a link</a>
                        </li>
                        <li>
                            <a href="">this is a link</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="hero-text">
                <div className="hero title w-screen h-max pt-40 px-40 text-9xl">
                    Get To Know Your Pokémon ...
                </div>
                <div className=" pokemons-images  flex items-center justify-start px-40 pt-10">
                    <Image width={800} height={800} alt="pokemon image" src="/pokemon.png"></Image>
                    <div className="search  flex items-end justify-start py-8 px-20 w-[50%] mx-20 h-80">
                        <Image className="transition-transform duration-500 hover:rotate-[360deg] cursor-pointer" width={120} height={120} alt="search" src={searchball}></Image>
                    </div>
                </div>
            </div>
            {/* <div className=" flex w-[100%] h-screen justify-center">
                <div className="left">pokemon overview</div>
                <div className="right">pokemon stats</div>
                 <PokemonData /> </div> */}
        </>
    );
}
