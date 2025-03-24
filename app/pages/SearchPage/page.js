import Topbar from "@/components/Topbar";
import PokemonData from "../../../components/PokemonData";

export default function SearchPage() {
  return (
    <>
    <Topbar/>
      <div className="pt-28 px-40 border2 border-black w-[100%] h-screen justify-center bg-purple-100 overflow-hidden">
        <PokemonData />
      </div>
    </>
  );
}
