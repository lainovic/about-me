import React from "react";
import styled from "styled-components";

import TextSection from "./TextSection";
import TitleSection from "./TitleSection";
import ContactSection from "./ContactSection";
import SocialMediaSection from "./SocialMediaSection";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Content = styled.div``;

const Image = styled.img`
  margin-top: -90px;
  height: 300px;
`;

const Profile = () => {
  return (
    <Wrapper>
      <Image style={styles.section} src="me.png" />
      <Content>
        <TitleSection style={styles.section} />
        <ContactSection style={styles.section} />
        <TextSection title="About Me" style={styles.section}>
          Hey, welcome.
          <br />I am a software developer with an enterpreneurial mindset. I am
          insatiably curious and interested in making things simple and
          intuitive.
          <br />I believe that technology has the power to raise our collective
          consciousness.
        </TextSection>
        <TextSection title="Interests" style={styles.section}>
          Food nerd. Voracious reader. Dancer. Self-improvement fanatic.
        </TextSection>
      </Content>
      <SocialMediaSection />
    </Wrapper>
  );
};

const styles = {
  section: {
    marginBottom: "16px",
  },
};

export default Profile;
