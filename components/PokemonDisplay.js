"use client";

import Image from "next/image";

export default function PokemonDisplay({ pokemon }) {
  if (!pokemon || !pokemon.name) {
    return null;
  }

  return (
    <>
      <div className="container p-20 w-screen flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold  capitalize">
          {pokemon.name}
        </h1>
        <h1 className="text-2xl mb-10 capitalize">
           Base Experience - {pokemon.experience}
        </h1>
        <div className="information flex mt-0 items-center justify-center gap-20">
          <div className="overview w-1/2 h-[35rem] rounded-3xl border-2 border-sky-800 bg-sky-100">
            {pokemon.sprites && (
              <div className="cartoon flex justify-center space-x-4 mb-4">
                <div className="text-center">
                  <Image
                    src={pokemon.sprites.default}
                    alt={`${pokemon.name} default sprite`}
                    width={500}
                    height={500}
                    className=""
                  />
                  <p>Default</p>
                </div>
                <div className="text-center">
                  <Image
                    src={pokemon.sprites.shiny}
                    alt={`${pokemon.name} shiny sprite`}
                    width={500}
                    height={500}
                    className=""
                  />
                  <p>Shiny</p>
                </div>
              </div>
            )}
            <div className=" p-4 rounded-lg ">
              <div className="mb-3">
                <h2 className="font-semibold text-lg">Type</h2>
                <p className="capitalize">{pokemon.type}</p>
              </div>

              <div className="mb-3">
                <h2 className="font-semibold text-lg">Abilities</h2>
                <ul>
                  {pokemon.abilities.map((ability, index) => (
                    <li key={index} className="capitalize">
                      {ability.name}
                      {ability.isHidden && <span className="text-gray-500 text-sm"></span>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="stats w-1/2 h-[35rem] p-4 rounded-3xl border-2 border-stone-600 bg-stone-100">
            <div>
              <h2 className="font-semibold text-lg">Base Stats</h2>
              <div className="flex flex-col gap-2">
                {pokemon.stats.map((stat, index) => (
                  <div key={index} className="mb-2 mt-2">
                    <p className="capitalize font-medium">{stat.name.replace("-", " ")}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${Math.min(100, (stat.value / 150) * 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-right">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
