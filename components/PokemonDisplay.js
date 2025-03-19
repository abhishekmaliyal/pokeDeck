"use client";

import Image from "next/image";

export default function PokemonDisplay({ pokemon }) {
  if (!pokemon || !pokemon.name) {
    return null;
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 capitalize">{pokemon.name}-{pokemon.experience}</h1>
      
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
      
      <div className="cartoon bg-gray-100 p-4 rounded-lg shadow-md">
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
        
        <div>
          <h2 className="font-semibold text-lg">Base Stats</h2>
          <div className="grid grid-cols-2 gap-2">
            {pokemon.stats.map((stat, index) => (
              <div key={index} className="mb-2">
                <p className="capitalize font-medium">{stat.name.replace('-', ' ')}</p>
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
    </>
  );
}