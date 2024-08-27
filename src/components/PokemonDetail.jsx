import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";

function PokemonDetail() {
  const param = useParams();
  const navigate = useNavigate();
  const detail = MOCK_DATA.find((pokemon) => parseInt(param.id) === pokemon.id);

  const onBackButtonHandler = () => {
    navigate("/dex");
  };

  return (
    <Section>
      <img src={detail.img_url} />
      <Title>{detail.korean_name}</Title>
      <Info>타입: {detail.types.join(", ")}</Info>
      <span>{detail.description}</span>
      <Button onClick={onBackButtonHandler}>뒤로 가기</Button>
    </Section>
  );
}

export default PokemonDetail;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;
const Info = styled.p`
  color: #fd5858;
`;
const Button = styled.button`
  background-color: #fd5858;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 0;
  width: 50%;
  margin: 0 auto;
  &:hover {
    background-color: red;
  }
`;
