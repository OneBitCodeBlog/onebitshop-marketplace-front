import React from "react";
import { Container } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";

const SellerProfile = () => {
  return (
    <Container>
      <DefaultTitle title="PERFIL DO VENDEDOR" fontSize={20} />
      <ProfileInfo />
    </Container>
  );
};

export default SellerProfile;
