import React from "react";
import { Container } from "./styled";
import NavBar from "../../components/common/NavBar";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import Form from "../../components/UserProfile/Form";

const UserProfile = () => {
  return (
    <>
      <Container>
        <DefaultTitle fontSize={20} title="MEU PERFIL" />

        <ProfileInfo />

        <Form />
      </Container>
      <NavBar />
    </>
  );
};

export default UserProfile;
