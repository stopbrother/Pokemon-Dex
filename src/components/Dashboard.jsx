import { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

function Dashboard() {
  const { selectedPokemon, removePokemon } = useContext(PokemonContext);

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
              <Button onClick={() => removePokemon(pokemon.id)}>삭제</Button>
            </li>
          ))}
        </DashboardItems>
      )}
    </DashboardContainer>
  );
}

export default Dashboard;

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
  gap: 1rem;
  & li {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    justify-content: center;
    align-items: center;
  }
`;
const Button = styled.button`
  background-color: #fd5858;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 70%;
  &:hover {
    background-color: red;
  }
`;
