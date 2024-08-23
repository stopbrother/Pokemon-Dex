import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import PokemonCard from "../components/PokemonCard";
import styled from "styled-components";
import MOCK_DATA from "../mock";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    const selectedCheck = selectedPokemon.some(
      (selected) => pokemon.id === selected.id
    );

    if (selectedPokemon.length >= 6) {
      return alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
    }
    if (selectedCheck) {
      return alert("이미 선택한 포켓몬 입니다.");
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
      <Dashboard selectedPokemon={selectedPokemon} onRemove={removePokemon} />
      <PokemonList pokemonList={MOCK_DATA} onAdd={addPokemon} />
    </Wrapper>
  );
}

export default Dex;
