import React from "react";
import { Container } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../routes";
import CategoryList from "../../components/Category/CategoryList";

type Props = NativeStackScreenProps<PropsNavigationStack, "Category">;

const Category = ({ route }: Props) => {
  return (
    <Container>
      <DefaultTitle title={route.params._id} fontSize={20} />

      <CategoryList products={route.params.products} />
    </Container>
  );
};

export default Category;
