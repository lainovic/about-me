import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const Wrapper = styled.div`
  background-color: #23252c;
  width: 550px;
  height: 868px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackCard = (props) => {
  return (
    <Wrapper>
      <Profile />
    </Wrapper>
  );
};

export default BackCard;
