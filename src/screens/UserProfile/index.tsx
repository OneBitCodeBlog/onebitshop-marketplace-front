import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styled";
import NavBar from "../../components/common/NavBar";

const UserProfile = () => {
  return (
    <>
      <Container>
        <Text>UserProfile</Text>
      </Container>
      <NavBar />
    </>
  );
};

export default UserProfile;
