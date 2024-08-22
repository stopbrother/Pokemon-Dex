import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100px;
  height: 100px;
  background-color: wheat;
`;

const Button = styled.button``;

function PokemonCard() {
  return (
    <Card>
      <Button>추가</Button>
    </Card>
  );
}

export default PokemonCard;
