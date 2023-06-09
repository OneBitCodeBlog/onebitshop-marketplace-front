import React, { useEffect, useState } from "react";
import { AdsContainer, Container, DenounceText } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import UserAds from "../../components/UserSellerProfile/UserAds";
import DefaultButton from "../../components/common/DefaultButton";
import NavBar from "../../components/common/NavBar";
import { useNavigation } from "@react-navigation/native";
import { PropsNavigationStack, PropsStack } from "../../routes";
import useAuth from "../../hook/useAuth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import profileService from "../../services/profileService";
import Loader from "../Loader";
import { User } from "../../entities/User";

type Props = NativeStackScreenProps<PropsNavigationStack, "SellerProfile">;

const SellerProfile = ({ route }: Props) => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<User>();
  const navigation = useNavigation<PropsStack>();

  const { token } = useAuth();

  const handleGetInfos = async () => {
    const data = await profileService.getSellerProfile(route.params);
    setUserInfo(data.data);
    setLoading(false);
  };

  useEffect(() => {
    handleGetInfos();
  }, []);

  if (!userInfo || loading) {
    return <Loader />;
  }

  return (
    <>
      <Container contentContainerStyle={{ paddingBottom: 120 }}>
        <DefaultTitle title="PERFIL DO VENDEDOR" fontSize={20} />
        <ProfileInfo userInfo={userInfo} />
        <AdsContainer>
          <UserAds product={userInfo.products} seller />
        </AdsContainer>
        <DefaultButton
          buttonText="FALE COM O VENDEDOR"
          buttonType="primary"
          buttonHandle={() => {}}
          marginVertical={10}
        />
        <DenounceText
          onPress={() => {
            !token
              ? navigation.navigate("Login")
              : navigation.navigate("Denounce");
          }}
        >
          Achou algo estranho? Denuncie Aqui!
        </DenounceText>
      </Container>
      <NavBar />
    </>
  );
};

export default SellerProfile;
