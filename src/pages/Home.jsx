import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Main>
      <h1>포켓몬 도감</h1>
      <button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</button>
    </Main>
  );
}

export default Home;
