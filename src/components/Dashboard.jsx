import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: whitesmoke;
  padding-bottom: 20px;
`;
const DashboardTitle = styled.h1`
  padding: 20px;
  color: red;
  font-size: 1.5rem;
  font-weight: 600;
`;
const DashboardItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const BlankPokemonImg = styled.img`
  width: 100%;
  height: 100%;
`;

function Dashboard({ selectedPokemon, onRemove }) {
  return (
    <DashboardContainer>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      <DashboardItems>
        {selectedPokemon.map((pokemon) => (
          <li key={pokemon.id}>
            <div>
              <img src={pokemon.img_url} alt="" />
            </div>
            <span>{pokemon.korean_name}</span>
            <span>No. {pokemon.id}</span>
            <button onClick={() => onRemove(pokemon.id)}>삭제</button>
          </li>
        ))}
      </DashboardItems>
    </DashboardContainer>
  );
}

export default Dashboard;
