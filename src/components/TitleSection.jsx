import React from "react";
import styled from "styled-components";

import Colors from "../config/Colors";

const Wrapper = styled.div`
  text-align: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${Colors.white};
  font-weight: 800;
`;

const TitleSection = ({ style }) => {
  return (
    <Wrapper style={style}>
      <h1>Marko Lainović</h1>
      <h4>
        <Link target="_blank" href="https://markolainovic.website">
          markolainovic.website
        </Link>
      </h4>
      <h4>
        <Link target="_blank" href="https://mare.care">
          My pet projects
        </Link>
      </h4>
      <h4>
        <Link target="_blank" href="htpps://blog.emotionaldeveloper.com">
          My writings
        </Link>
      </h4>
    </Wrapper>
  );
};

export default TitleSection;
