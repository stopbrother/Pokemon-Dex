import { useContext } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../context/PokemonContext";

const ListContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

function PokemonList() {
  const { pokemonDataList } = useContext(PokemonContext);

  return (
    <ListContainer>
      {pokemonDataList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ListContainer>
  );
}

export default PokemonList;
