import React from "react";
import styled from "styled-components";

import Link from "./Link";

const Wrapper = styled.section`
  text-align: center;
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
        <Link target="_blank" href="https://blog.emotionaldeveloper.com">
          My writings
        </Link>
      </h4>
    </Wrapper>
  );
};

export default TitleSection;
