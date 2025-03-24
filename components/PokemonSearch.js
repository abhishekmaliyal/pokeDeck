"use client";
import { useState } from "react";

export default function PokemonSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    onSearch(searchTerm.toLowerCase().trim());
  };

  return (
    <form onSubmit={handleSearch} className="bg-transparent rounded-3xl fixed w-[85%]">
      <div className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Pokémon name or ID"
          className="flex-grow px-4 py-2 border-2 bg-blue-100 border-blue-800 text-black text-lg rounded-3xl focus:outline-none"
        />
        <button 
          type="submit"
          className="bg-green-200 border-2 border-green-800 hover:bg-green-800 hover:border-green-200 hover:text-white text-black px-4 mx-2 rounded-3xl"
        >
          Search
        </button>
      </div>
    </form>
  );
}