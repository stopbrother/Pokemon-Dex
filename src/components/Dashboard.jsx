import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: gray;
  padding-bottom: 20px;
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <h2 className="dashboard-title">나만의 포켓몬</h2>
      <ul className="selected-items">
        <li>이미지</li>
        <li>이미지</li>
        <li>이미지</li>
        <li>이미지</li>
        <li>이미지</li>
        <li>이미지</li>
      </ul>
    </DashboardContainer>
  );
}

export default Dashboard;
