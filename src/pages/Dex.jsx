import React from "react";
import { useLocation } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import PokemonCard from "../components/PokemonCard";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

function Dex() {
  return (
    <Wrapper>
      <Dashboard />
      <PokemonList></PokemonList>
    </Wrapper>
  );
}

export default Dex;
