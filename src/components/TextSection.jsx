import React from "react";
import styled from "styled-components";

const Header = styled.h2`
  font-weight: 600;
`;

const Wrapper = styled.section`
  line-height: 1.6rem;
`;

const TextSection = ({ style, title, children }) => {
  return (
    <Wrapper style={style}>
      <Header>{title}</Header>
      {children}
    </Wrapper>
  );
};

export default TextSection;
