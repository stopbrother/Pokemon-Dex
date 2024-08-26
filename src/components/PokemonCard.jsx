import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const Card = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: wheat;
  border: 1px solid #000;
  border-radius: 7px;
  box-sizing: border-box;
`;
const CardImg = styled.img`
  width: auto;
  height: auto;
`;
const CardName = styled.p`
  text-decoration: none;
`;
const CardNumber = styled.span`
  text-decoration: none;
`;

const Button = styled.button``;

function PokemonCard({ pokemon }) {
  const { addPokemon } = useContext(PokemonContext);

  return (
    <Card>
      <Link to={`/detail/${pokemon.id}`}>
        <CardImg src={pokemon.img_url} />
        <CardName>{pokemon.korean_name}</CardName>
        <CardNumber>No. {pokemon.id}</CardNumber>
      </Link>
      <Button onClick={() => addPokemon(pokemon)}>추가</Button>
    </Card>
  );
}

export default PokemonCard;
