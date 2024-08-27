import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import Dex from "../pages/Dex";

export const PokemonContext = createContext();

// export function usePokemon() {
//   return useContext(PokemonContext);
// }

// export function PokemonProvider({ children }) {
//   const [selectedPokemon, setSelectedPokemon] = useState([]);

//   const addPokemon = (pokemon) => {
//     const selectedCheck = selectedPokemon.some(
//       (selected) => pokemon.id === selected.id
//     );

//     if (selectedCheck) {
//       return alert("이미 선택한 포켓몬 입니다.");
//     }
//     if (selectedPokemon.length >= 6) {
//       return alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
//     }
//     setSelectedPokemon((prevSelectedPokemon) => [
//       ...prevSelectedPokemon,
//       pokemon,
//     ]);
//   };

//   const removePokemon = (selectedPokemon) => {
//     setSelectedPokemon((prevSelectedPokemon) =>
//       prevSelectedPokemon.filter((pokemon) => pokemon.id !== selectedPokemon)
//     );
//   };

//   return (
//     <PokemonContext.Provider
//       value={{ selectedPokemon, addPokemon, removePokemon }}
//     >
//       {children}
//       <Dex></Dex>
//     </PokemonContext.Provider>
//   );
// }
