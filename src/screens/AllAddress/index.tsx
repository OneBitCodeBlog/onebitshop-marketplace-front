import React, { useEffect, useState } from "react";
import {
  Container,
  CreateAddBtn,
  CreateAddBtnTxt,
  ListHeight,
  NoAdd,
} from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import NavBar from "../../components/common/NavBar";
import { FlatList, ListRenderItem, View } from "react-native";
import AddressCard from "./AddressCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack, PropsStack } from "../../routes";

import { Address } from "../../entities/User";
import addressSerivice from "../../services/addressService";

type Props = NativeStackScreenProps<PropsNavigationStack, "AllAddress">;

const AllAddress = ({ route }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const [allAddress, setAllAddress] = useState<Address[]>([]);

  const { newAddress } = route.params;

  const renderItem: ListRenderItem<Address> = ({ item }) => (
    <AddressCard item={item} />
  );

  const handleNavAddAddress = () => {
    navigation.navigate("AddAddress");
  };

  const handleGetAddress = async () => {
    const res = await addressSerivice.getAddress();

    setAllAddress(res.data);
  };

  useEffect(() => {
    handleGetAddress();
  }, [newAddress]);

  return (
    <>
      <Container>
        <DefaultTitle title="TODOS OS ENDEREÇOS" fontSize={18} />

        {allAddress.length <= 0 ? (
          <>
            <NoAdd>Você não tem endereços{"\n"}cadastrados no momento</NoAdd>
            <CreateAddBtn onPress={handleNavAddAddress}>
              <CreateAddBtnTxt>Criar Endereço</CreateAddBtnTxt>
            </CreateAddBtn>
          </>
        ) : (
          <>
            <ListHeight>
              <FlatList
                data={allAddress}
                keyExtractor={(item: Address) => item._id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
              />
            </ListHeight>
            <CreateAddBtn onPress={handleNavAddAddress}>
              <CreateAddBtnTxt>Criar Endereço</CreateAddBtnTxt>
            </CreateAddBtn>
          </>
        )}
      </Container>
      <NavBar />
    </>
  );
};

export default AllAddress;
