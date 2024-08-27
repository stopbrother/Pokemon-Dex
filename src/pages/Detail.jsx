import styled from "styled-components";
import PokemonDetail from "../components/PokemonDetail";

function Detail() {
  return (
    <Main>
      <PokemonDetail />
    </Main>
  );
}

export default Detail;

const Main = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
