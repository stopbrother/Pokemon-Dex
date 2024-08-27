import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pokemonLogo from "../assets/pokemonLogo.png";

function Home() {
  const navigate = useNavigate();

  return (
    <Main>
      <Image src={pokemonLogo} />
      <Button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</Button>
    </Main>
  );
}

export default Home;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Image = styled.img`
  width: 500px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #fd5858;
  color: #fff;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;
