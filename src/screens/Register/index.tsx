import React, { useState } from "react";
import { AcceptTerms, CompanyLogo, Container, Title } from "./styled";
import BackIcon from "../../components/common/BackIcon";
import Form from "../../components/Register/Form";
import DefaultButton from "../../components/common/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import useAuth from "../../hook/useAuth";
import { Alert } from "react-native";

const companyLogo = require("../../../assets/images/logo-obc.png");

const Register = () => {
  const navigation = useNavigation<PropsStack>();
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });

  const { register } = useAuth();

  const handleRegister = async () => {
    if (fields.password.length < 4) {
      Alert.alert("Sua senha deve ter no mínimo 4 caracteres");

      return;
    } else if (fields.password !== fields.confirmPassword) {
      Alert.alert("Senha e confirmação diferentes!");

      return;
    } else if (
      !fields.name ||
      !fields.email ||
      !fields.phone ||
      !fields.password
    ) {
      Alert.alert("Preencha todos os campos!");

      return;
    }

    register(fields.name, fields.email, fields.password, fields.phone);

    Alert.alert("Registro feito com sucesso!");
  };

  return (
    <Container contentContainerStyle={{ paddingBottom: 60 }}>
      <BackIcon marginLeft={20} />
      <Title>CRIAR UMA CONTA</Title>
      <Form fields={fields} setFields={setFields} />
      <DefaultButton
        buttonText="FAZER REGISTRO"
        buttonType="primary"
        marginVertical={30}
        buttonHandle={handleRegister}
      />
      <AcceptTerms>
        Ao fazer o registro aceito{"\n"}os termos de política de privacidade
      </AcceptTerms>
      <DefaultButton
        buttonText="FAZER LOGIN"
        buttonType="secondary"
        marginVertical={30}
        buttonHandle={() => {
          navigation.navigate("Login");
        }}
      />
      <CompanyLogo source={companyLogo} />
    </Container>
  );
};

export default Register;
