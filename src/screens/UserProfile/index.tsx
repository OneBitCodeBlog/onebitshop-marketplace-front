import React from "react";
import { Container } from "./styled";
import NavBar from "../../components/common/NavBar";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";

const UserProfile = () => {
  return (
    <>
      <Container>
        <DefaultTitle fontSize={20} title="MEU PERFIL" />
        <ProfileInfo />
      </Container>
      <NavBar />
    </>
  );
};

export default UserProfile;
