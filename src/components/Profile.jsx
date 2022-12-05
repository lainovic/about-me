import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  text-align: center;
`;

const Title = () => {
  return (
    <TitleWrapper>
      <h1>Marko Lainović</h1>
      <div>Software Engineer</div>
      <div>mare@mare.care</div>
    </TitleWrapper>
  );
};

const Profile = () => {
  return (
    <div>
      <img src="me.png" />
      <Title />
    </div>
  );
};

export default Profile;
