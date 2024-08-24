import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

function PokemonCard({ id, name, img, type, description, onAdd }) {
  return (
    <Card>
      <Link to={`/detail/${id}`}>
        <CardImg src={img} />
        <CardName>{name}</CardName>
        <CardNumber>No. {id}</CardNumber>
      </Link>
      <Button onClick={onAdd}>추가</Button>
    </Card>
  );
}

export default PokemonCard;
