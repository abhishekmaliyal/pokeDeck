"use client";
import { useEffect, useState } from "react";
import PokemonSearch from "./PokemonSearch.js";
import PokemonDisplay from "./PokemonDisplay";

export default function PokemonData() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
    type: "",
    abilities: [],
    stats: [],
    sprites: null,
    experience: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (name) => {
    setIsLoading(true);
    setError(null);
    setPokemonName(name);
  };

  useEffect(() => {
    async function fetchPokemonData() {
      if (!pokemonName) return;

      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setPokemon({
          name: result.name,
          type: result.types.map((t) => t.type.name).join(", "),
          abilities: result.abilities.map((a) => ({
            name: a.ability.name,
            isHidden: a.is_hidden,
          })),
          stats: result.stats.map((s) => ({
            name: s.stat.name,
            value: s.base_stat,
          })),
          sprites: {
            default: result.sprites.front_default,
            shiny: result.sprites.front_shiny,
          },
          experience: result.base_experience,
        });
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setError("Pokémon not found or failed to load data");
        setIsLoading(false);
      }
    }

    fetchPokemonData();
  }, [pokemonName]);

  return (
    <div className="cartoon pokemon-info max-w-md mx-auto p-4">
      <PokemonSearch onSearch={handleSearch} />

      {isLoading ? (
        <div className="flex justify-center p-8">Loading Pokémon data...</div>
      ) : error ? (
        <div className="text-red-500 p-4">{error}</div>
      ) : pokemon.name ? (
        <PokemonDisplay pokemon={pokemon} />
      ) : (
        <div className="cartoon text-center p-8 text-gray-500">
          Enter a Pokémon name or ID to see details
        </div>
      )}
    </div>
  );
}
