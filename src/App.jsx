import React from "react";
import styled from "styled-components";

import Card from "./components/Card";
import Colors from "./config/Colors";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  background-image: linear-gradient(180deg, ${Colors.purple}, ${Colors.yellow});
  background-attachment: fixed;
  min-height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Card />
    </Wrapper>
  );
}

export default App;
