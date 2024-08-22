import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: gray;
  padding-bottom: 20px;
`;

function Dashboard({ selectedPokemon }) {
  console.table("selectedPokemon", selectedPokemon);
  return (
    <DashboardContainer>
      <h2 className="dashboard-title">나만의 포켓몬</h2>
      <ul className="selected-items">
        {selectedPokemon.map((pokemon) => (
          <li key={pokemon.id}>
            <div>
              <img src={pokemon.img_url} alt="" />
            </div>
            <span>{pokemon.korean_name}</span>
          </li>
        ))}
      </ul>
    </DashboardContainer>
  );
}

export default Dashboard;
