import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import {
  Bold,
  CompanyLogo,
  Container,
  ForgetPassword,
  Input,
  InputContainer,
  Logo,
  RegisterText,
} from "./styled";
import BackIcon from "../../components/common/BackIcon";
import DefaultButton from "../../components/common/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import useAuth from "../../hook/useAuth";

const logo = require("../../../assets/images/logo.png");
const companyLogo = require("../../../assets/images/logo-obc.png");

const Login = () => {
  const navigation = useNavigation<PropsStack>();
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleLogin = () => {
    login(fields.email, fields.password);
  };

  return (
    <Container>
      <BackIcon marginLeft={30} />
      <Logo source={logo} />
      <InputContainer>
        <Input
          placeholder="Email"
          placeholderTextColor="#C0C0C1"
          value={fields.email}
          onChangeText={(val) => {
            setFields({
              ...fields,
              email: val,
            });
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry={true}
          value={fields.password}
          onChangeText={(val) => {
            setFields({
              ...fields,
              password: val,
            });
          }}
        />
      </InputContainer>
      <ForgetPassword>Esqueceu sua senha?</ForgetPassword>
      <DefaultButton
        buttonText="Fazer Login"
        buttonType="primary"
        marginVertical={40}
        buttonHandle={() => {
          handleLogin();
        }}
      />
      <RegisterText
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        Você ainda não tem conta? <Bold>Registre-se aqui!</Bold>
      </RegisterText>
      <CompanyLogo source={companyLogo} />
    </Container>
  );
};

export default Login;
