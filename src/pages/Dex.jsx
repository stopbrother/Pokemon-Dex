import { useState } from "react";

import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

import styled from "styled-components";
import MOCK_DATA from "../mock";

import { PokemonContext } from "../context/PokemonContext";

const Wrapper = styled.div`
  min-width: 320px;
`;

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const pokemonDataList = MOCK_DATA;

  const addPokemon = (pokemon) => {
    const selectedCheck = selectedPokemon.some(
      (selected) => pokemon.id === selected.id
    );

    if (selectedCheck) {
      return alert("이미 선택한 포켓몬 입니다.");
    }
    if (selectedPokemon.length >= 6) {
      return alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
    }
    setSelectedPokemon((prevSelectedPokemon) => [
      ...prevSelectedPokemon,
      pokemon,
    ]);
  };

  const removePokemon = (selectedPokemon) => {
    setSelectedPokemon((prevSelectedPokemon) =>
      prevSelectedPokemon.filter((pokemon) => pokemon.id !== selectedPokemon)
    );
  };

  return (
    <Wrapper>
      <PokemonContext.Provider
        value={{ selectedPokemon, removePokemon, addPokemon, pokemonDataList }}
      >
        <Dashboard />
        <PokemonList />
      </PokemonContext.Provider>
    </Wrapper>
  );
}

export default Dex;
