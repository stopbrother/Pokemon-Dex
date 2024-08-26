import { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

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

function Dashboard() {
  const { selectedPokemon, removePokemon } = useContext(PokemonContext);
  console.log(selectedPokemon);
  return (
    <DashboardContainer>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <DashboardItems>
          {selectedPokemon.map((pokemon) => (
            <li key={pokemon.id}>
              <div>
                <img src={pokemon.img_url} alt="" />
              </div>
              <span>{pokemon.korean_name}</span>
              <span>No. {pokemon.id}</span>
              <button onClick={() => removePokemon(pokemon.id)}>삭제</button>
            </li>
          ))}
        </DashboardItems>
      )}
    </DashboardContainer>
  );
}

export default Dashboard;
