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
    setSelectedPokemon((prevSelectedPokemon) => [
      ...prevSelectedPokemon,
      pokemon,
    ]);
  };

  // const removePokemon = (pokemon) => {};

  return (
    <Wrapper>
      <Dashboard selectedPokemon={selectedPokemon} />
      <PokemonList pokemonList={MOCK_DATA} onAdd={addPokemon} />
    </Wrapper>
  );
}

export default Dex;
