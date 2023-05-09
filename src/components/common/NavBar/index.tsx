import { useNavigation } from "@react-navigation/native";
import React from "react";
import { PropsStack } from "../../../routes";
import { Container, Icon, IconButton } from "./styled";

const home = require("../../../../assets/icons/home.png");
const chat = require("../../../../assets/icons/chat.png");
const add = require("../../../../assets/icons/add.png");
const categories = require("../../../../assets/icons/categories.png");
const profile = require("../../../../assets/icons/profile.png");

const NavBar = () => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container>
      <IconButton
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Icon source={home} />
      </IconButton>
      <IconButton
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Icon source={chat} />
      </IconButton>
      <IconButton
        onPress={() => {
          navigation.navigate("AddProduct");
        }}
      >
        <Icon source={add} />
      </IconButton>
      <IconButton
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Icon source={categories} />
      </IconButton>
      <IconButton
        onPress={() => {
          navigation.navigate("UserProfile");
        }}
      >
        <Icon source={profile} />
      </IconButton>
    </Container>
  );
};

export default NavBar;
