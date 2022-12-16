import React from "react";
import styled from "styled-components";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 16px 0;
`;

const Button = styled.button`
  width: 115px;
  height: 34px;
  border-radius: 6px;
  padding: 0px 9px;
  color: ${(p) => p["text-color"]};
  background-color: ${(p) => p["bg-color"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  border: none;
  transition-duration: 0.3s;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

const ContactSection = ({ style }) => {
  const gotoLinkedin = () => {
    window.open("https://www.linkedin.com/in/lainovic", "_blank");
  };

  const sendEmail = () => {
    window.open("mailto:marko@lainovic.me", "_blank");
  };

  return (
    <Wrapper style={style}>
      <Button bg-color="#fff" onClick={sendEmail}>
        <EmailIcon fontSize={styles.icon.size} />
        Email
      </Button>
      <Button bg-color="#5093E2" text-color="#fff" onClick={gotoLinkedin}>
        <LinkedInIcon fontSize={styles.icon.size} />
        LinkedIn
      </Button>
    </Wrapper>
  );
};

const styles = {
  icon: {
    size: "small",
  },
};
export default ContactSection;
