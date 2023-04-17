import { View, Text } from "react-native";
import React from "react";
import { Container, EmptyView, Title } from "./styled";
import BackIcon from "../BackIcon";

interface TitleProps {
  fontSize: number;
  title: string;
}

const DefaultTitle = ({ fontSize, title }: TitleProps) => {
  return (
    <Container>
      <BackIcon marginLeft={0} />
      <Title fontSize={fontSize}>{title}</Title>
      <EmptyView />
    </Container>
  );
};

export default DefaultTitle;
