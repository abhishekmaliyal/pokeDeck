// "use client";

// import { useEffect, useState } from "react";

// export default function Info() {

//     const [data, setData] = useState([]);
//     const pokemon ={
//         name:"",
//         type:"",
//         abilities:"",
//     }

//     useEffect(() => {
//         async function getData() {
//             const apiUrl = `https://pokeapi.co/api/v2/pokemon/pikachu`;
//             try {
//                 const response = await fetch(apiUrl);
//                 if (!response.ok) {
//                     throw new Error("no data");
//                 }
//                 const result = await response.json();
//                 console.log(result);
//                 pokemon.name = result.name
//                 setData(pokemon);
//             } catch (e) {
//                 console.log(e);
//             }
//         }
//         getData();
//     });

//     return (
//         <>
//             <div>{data}</div>
//         </>
//     );
// }

/***************************************************************************************************** */

// "use client";

// import { useEffect, useState } from "react";

// export default function Info() {
//   const [pokemon, setPokemon] = useState({
//     name: "",
//     type: "",
//     abilities: [],
//     stats: [],
//     sprites: null
//   });
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function getData() {
//       // We'll use the Ditto ID (132) from your JSON data
//       const apiUrl = `https://pokeapi.co/api/v2/pokemon/132`;
//       try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const result = await response.json();

//         setPokemon({
//           name: result.name,
//           type: result.types.map(t => t.type.name).join(", "),
//           abilities: result.abilities.map(a => ({
//             name: a.ability.name,
//             isHidden: a.is_hidden
//           })),
//           stats: result.stats.map(s => ({
//             name: s.stat.name,
//             value: s.base_stat
//           })),
//           sprites: {
//             default: result.sprites.front_default,
//             shiny: result.sprites.front_shiny
//           }
//         });
//         setIsLoading(false);
//       } catch (e) {
//         console.error(e);
//         setError("Failed to load Pokémon data");
//         setIsLoading(false);
//       }
//     }

//     getData();
//   }, []); // Empty dependency array means this runs once on mount

//   if (isLoading) {
//     return <div className="flex justify-center p-8">Loading Pokémon data...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 p-4">{error}</div>;
//   }

//   return (
//     <div className="pokemon-info max-w-md mx-auto p-4 text-black">
//       <h1 className="text-2xl font-bold mb-4 capitalize">{pokemon.name}</h1>

//       {pokemon.sprites && (
//         <div className="flex justify-center space-x-4 mb-4">
//           <div className="text-center">
//             <img
//               src={pokemon.sprites.default}
//               alt={`${pokemon.name} default sprite`}
//               className="h-32 w-32"
//             />
//             <p>Default</p>
//           </div>
//           <div className="text-center">
//             <img
//               src={pokemon.sprites.shiny}
//               alt={`${pokemon.name} shiny sprite`}
//               className="h-32 w-32"
//             />
//             <p>Shiny</p>
//           </div>
//         </div>
//       )}

//       <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//         <div className="mb-3">
//           <h2 className="font-semibold text-lg">Type</h2>
//           <p className="capitalize">{pokemon.type}</p>
//         </div>

//         <div className="mb-3">
//           <h2 className="font-semibold text-lg">Abilities</h2>
//           <ul>
//             {pokemon.abilities.map((ability, index) => (
//               <li key={index} className="capitalize">
//                 {ability.name} {ability.isHidden && <span className="text-gray-500 text-sm"></span>}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h2 className="font-semibold text-lg">Base Stats</h2>
//           <div className="grid grid-cols-2 gap-2">
//             {pokemon.stats.map((stat, index) => (
//               <div key={index} className="mb-2">
//                 <p className="capitalize font-medium">{stat.name.replace('-', ' ')}</p>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div
//                     className="bg-blue-600 h-2.5 rounded-full"
//                     style={{ width: `${Math.min(100, (stat.value / 150) * 100)}%` }}
//                   ></div>
//                 </div>
//                 <p className="text-sm text-right">{stat.value}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/**************************************************************************************************** */

// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Info(name) {
//   const [pokemonName, setPokemonName] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [pokemon, setPokemon] = useState({
//     name: "",
//     type: "",
//     abilities: [],
//     stats: [],
//     sprites: null,
//     base_experience:''
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!searchTerm.trim()) return;

//     setIsLoading(true);
//     setError(null);
//     setPokemonName(searchTerm.toLowerCase().trim());
//   };

//   useEffect(() => {
//     async function getData() {
//       if (!pokemonName) return;

//       const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

//       try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const result = await response.json();
//         setPokemon({
//           name: result.name,
//           type: result.types.map(t => t.type.name).join(", "),
//           abilities: result.abilities.map(a => ({
//             name: a.ability.name,
//             isHidden: a.is_hidden
//           })),
//           stats: result.stats.map(s => ({
//             name: s.stat.name,
//             value: s.base_stat
//           })),
//           sprites: {
//             default: result.sprites.front_default,
//             shiny: result.sprites.front_shiny
//           },
//           base_experience:result.base_experience
//         });
//         setIsLoading(false);
//       } catch (e) {
//         console.error(e);
//         setError("Pokémon not found or failed to load data");
//         setIsLoading(false);
//       }
//     }

//     getData();
//   }, [pokemonName]);

//   return (
//     <div className="pokemon-info max-w-md mx-auto p-4 text-black">
//       <form onSubmit={handleSearch} className="mb-6">
//         <div className="flex">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Enter Pokémon name or ID"
//             className="flex-grow px-4 py-2 border rounded-l focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
//           >
//             Search
//           </button>
//         </div>
//       </form>

//       {isLoading ? (
//         <div className="flex justify-center p-8">Loading Pokémon data...</div>
//       ) : error ? (
//         <div className="text-red-500 p-4">{error}</div>
//       ) : pokemon.name ? (
//         <>
//           <h1 className="text-2xl font-bold mb-4 capitalize">{pokemon.name} - {pokemon.base_experience}</h1>

//           {pokemon.sprites && (
//             <div className="flex justify-center space-x-4 mb-4">
//               <div className="text-center">
//                 <Image
//                   src={pokemon.sprites.default}
//                   alt={`${pokemon.name} default sprite`}
//                   width={128}
//                   height={128}
//                   className="h-32 w-32"
//                 />
//                 <p>Default</p>
//               </div>
//               <div className="text-center">
//                 <Image
//                   src={pokemon.sprites.shiny}
//                   alt={`${pokemon.name} shiny sprite`}
//                   width={128}
//                   height={128}
//                   className="h-32 w-32"
//                 />
//                 <p>Shiny</p>
//               </div>
//             </div>
//           )}

//           <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//             <div className="mb-3">
//               <h2 className="font-semibold text-lg">Type</h2>
//               <p className="capitalize">{pokemon.type}</p>
//             </div>

//             <div className="mb-3">
//               <h2 className="font-semibold text-lg">Abilities</h2>
//               <ul>
//                 {pokemon.abilities.map((ability, index) => (
//                   <li key={index} className="capitalize">
//                     {ability.name}

//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h2 className="font-semibold text-lg">Base Stats</h2>
//               <div className="grid grid-cols-2 gap-2">
//                 {pokemon.stats.map((stat, index) => (
//                   <div key={index} className="mb-2">
//                     <p className="capitalize font-medium">{stat.name.replace('-', ' ')}</p>
//                     <div className="w-full bg-gray-200 rounded-full h-2.5">
//                       <div
//                         className="bg-blue-600 h-2.5 rounded-full"
//                         style={{ width: `${Math.min(100, (stat.value / 150) * 100)}%` }}
//                       ></div>
//                     </div>
//                     <p className="text-sm text-right">{stat.value}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="text-center p-8 text-gray-500">
//           Enter a Pokémon name or ID to see details
//         </div>
//       )}
//     </div>
//   );
// }

/***************************************************************************************************** */

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
        experience:'',
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
