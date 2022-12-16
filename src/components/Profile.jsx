import React from "react";
import styled from "styled-components";

import Section from "./Section";
import TitleSection from "./TitleSection";
import ContactSection from "./ContactSection";
import SocialMediaSection from "./SocialMediaSection";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
        <Section title="About Me" style={styles.section}>
          Hey, welcome.
          <br />I am a software developer with an enterpreneurial mindset. I am
          insatiably curious and interested in making things simple and
          intuitive.
          <br />I believe that technology has the power to raise our collective
          consciousness.
        </Section>
        <Section title="Interests" style={styles.section}>
          Food nerd. Reader. Dancer. Self-improvement fanatic.
        </Section>
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
