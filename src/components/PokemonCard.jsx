import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const Card = styled.div`
  width: 150px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  border: none;
  border-radius: 7px;
  box-sizing: border-box;
  gap: 1rem;
  &:hover {
    transform: scale(1.2);
  }
  & p {
    color: #000;
    font-weight: 600;
    line-height: 1.5;
  }
`;
const CardImg = styled.img``;

const Button = styled.button`
  background-color: #fd5858;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 2px 20px;
  &:hover {
    background-color: red;
  }
`;

function PokemonCard({ pokemon }) {
  const { addPokemon } = useContext(PokemonContext);

  return (
    <Card>
      <Link to={`/detail/${pokemon.id}`} style={{ textdecoration: "none" }}>
        <CardImg src={pokemon.img_url} />
        <p>{pokemon.korean_name}</p>
        <p>No. {pokemon.id}</p>
      </Link>
      <Button onClick={() => addPokemon(pokemon)}>추가</Button>
    </Card>
  );
}

export default PokemonCard;
