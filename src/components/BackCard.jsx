import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const Wrapper = styled.div`
  background: hsla(227deg 20.5% 17.3% / 0.7);
  justify-content: center;
  align-items: center;
  width: 600px;
  padding: 32px;
`;

const BackCard = (props) => {
  return (
    <Wrapper>
      <Profile />
    </Wrapper>
  );
};

export default BackCard;
