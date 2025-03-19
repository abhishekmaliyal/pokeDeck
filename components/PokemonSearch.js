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
    <form onSubmit={handleSearch} className="mb-6">
      <div className=" flex">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Pokémon name or ID"
          className="cartoon flex-grow px-4 py-2 border rounded-l focus:outline-none"
        />
        <button 
          type="submit"
          className="cartoon m-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
        >
          Search
        </button>
      </div>
    </form>
  );
}