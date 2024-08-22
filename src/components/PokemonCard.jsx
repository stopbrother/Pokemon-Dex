import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100px;
  height: 100px;
  background-color: wheat;
`;

const Button = styled.button``;

function PokemonCard({ id, name, img, type, description, onAdd }) {
  return (
    <Card>
      <img src={img} />
      <span>{name}</span>
      <span>No. {id}</span>
      <Button onClick={onAdd}>추가</Button>
    </Card>
  );
}

export default PokemonCard;
