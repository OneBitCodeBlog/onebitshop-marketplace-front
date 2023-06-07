import React, { useEffect, useState } from "react";
import {
  AddressText,
  Container,
  DeleteAcc,
  LogOutBtn,
  LogOutText,
} from "./styled";
import NavBar from "../../components/common/NavBar";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import Form from "../../components/UserSellerProfile/Form";
import UserAds from "../../components/UserSellerProfile/UserAds";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import { Seller } from "../../entities/Product";
import useAuth from "../../hook/useAuth";
import profileService from "../../services/profileService";
import Loader from "../Loader";
import { User } from "../../entities/User";

const UserProfile = () => {
  const navigation = useNavigation<PropsStack>();
  const [userInfo, setUserInfo] = useState<User>();

  const { logout } = useAuth();

  const handleUserInfos = async () => {
    const { data } = await profileService.getUserProfile();

    setUserInfo(data);
  };

  useEffect(() => {
    handleUserInfos();
  }, []);

  const handleDeleteAcc = () => {
    Alert.alert(
      "Você tem certeza?",
      "Ao fazer isso você excluirá sua conta para sempre",
      [
        {
          text: "Sim",
          onPress: () => {
            Alert.alert("Você deletou a sua conta!");
          },
        },
        {
          text: "Não",
        },
      ]
    );
  };

  if (!userInfo) {
    return <Loader />;
  }

  return (
    <>
      <Container contentContainerStyle={{ paddingBottom: 120 }}>
        <DefaultTitle fontSize={20} title="MEU PERFIL" />

        <ProfileInfo userInfo={userInfo} />

        <Form userInfo={userInfo} />

        <AddressText
          onPress={() => {
            navigation.navigate("AllAddress", {
              newAddress: false,
            });
          }}
        >
          Gerenciar Endereços
        </AddressText>

        {/* <UserAds product={Data} seller={false} /> */}

        <LogOutBtn onPress={logout}>
          <LogOutText>Sair da sua conta</LogOutText>
        </LogOutBtn>

        <DeleteAcc onPress={handleDeleteAcc}>Excluir conta</DeleteAcc>
      </Container>
      <NavBar />
    </>
  );
};

export default UserProfile;
