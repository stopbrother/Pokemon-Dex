import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

function PokemonList({ pokemonList, onAdd }) {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          img={pokemon.img_url}
          name={pokemon.korean_name}
          type={pokemon.types}
          description={pokemon.description}
          onAdd={() => onAdd(pokemon)}
        />
      ))}
    </ListContainer>
  );
}

export default PokemonList;
