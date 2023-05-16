import React from "react";
import { Container } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../routes";

type Props = NativeStackScreenProps<PropsNavigationStack, "Category">;

const Category = ({ route }: Props) => {
  console.log(route.params);

  return (
    <Container>
      <DefaultTitle title={route.params._id} fontSize={20} />
    </Container>
  );
};

export default Category;
