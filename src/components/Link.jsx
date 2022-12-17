import styled from "styled-components";

import Colors from "../config/Colors";

const Link = styled.a`
  text-decoration: none;
  color: ${Colors.white};
  font-weight: 800;
  background: linear-gradient(to right, ${Colors.purple}, ${Colors.yellow});
  background-size: 0 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
  &:hover {
    background-size: 100% 1px;
  }
`;

export default Link;
