import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div`
  display: flex;
  margin-top: 20px;
  background-color: gray;
`;

function PokemonList() {
  return (
    <ListContainer>
      <PokemonCard></PokemonCard>
    </ListContainer>
  );
}

export default PokemonList;
