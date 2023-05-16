import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%;
  padding-left: 20px;
`;

export const ProductImage = styled.Image`
  width: ${width * 0.8 - 30}px;
  height: ${width / 2}px;
  margin: 20px 10px;
  border-radius: 5px;
`;
