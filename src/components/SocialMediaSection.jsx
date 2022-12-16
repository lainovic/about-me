import React from "react";
import styled from "styled-components";

import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 16px 0;
`;

const SocialMediaSection = ({ style }) => {
  return (
    <Wrapper style={style}>
      <InstagramIcon
        sx={{ "&:hover": { opacity: 0.8 } }}
        fontSize={styles.icon.size}
        onClick={() => {
          window.open("https://instagram.com/lajkabaus", "_blank");
        }}
      />
      <GitHubIcon
        sx={{ "&:hover": { opacity: 0.8 } }}
        fontSize={styles.icon.size}
        onClick={() => {
          window.open("https://github.com/lainovic/", "_blank");
        }}
      />
    </Wrapper>
  );
};

const styles = {
  icon: {
    size: "large",
  },
};

export default SocialMediaSection;
