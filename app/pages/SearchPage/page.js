import Topbar from "@/components/Topbar";
import PokemonData from "../../../components/PokemonData";

export default function SearchPage() {
  return (
    <>
    <Topbar/>
      <div className=" flex w-[100%] h-screen justify-center">
        <div className="left">pokemon overview</div>
        <div className="right">pokemon stats</div>
        <PokemonData />
      </div>
    </>
  );
}
