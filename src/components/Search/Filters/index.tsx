import { View, Text, Modal } from "react-native";
import React, { useContext, useState } from "react";
import {
  Bold,
  Container,
  FiltersContainer,
  FiltersIcon,
  FiltersText,
  ModalContainer,
  ModalOverlay,
  ModalText,
  OrderText,
} from "./styled";
import ComplementFilters from "./ComplementFilters";
import { QueryContext } from "../../../contexts/QueryContext";

const filtersIcon = require("../../../../assets/icons/filtrar.png");

const Filters = () => {
  const [modalVisible, setModalVisibile] = useState(false);
  const [filterText, setFilterText] = useState("Mais Recente");
  const [showFilters, setShowFilters] = useState(false);
  const queryContext = useContext(QueryContext);

  const handleBiggestPrice = async () => {
    setFilterText("Maior preço");
    queryContext.addFilters("orderBy=price&direction=desc");
    setModalVisibile(false);
  };

  const handleLowestPrice = async () => {
    setFilterText("Menor preço");
    queryContext.addFilters("orderBy=price&direction=asc");
    setModalVisibile(false);
  };

  const handleNewest = async () => {
    setFilterText("Mais recente");
    queryContext.addFilters("orderBy=updatedAt");
    setModalVisibile(false);
  };

  return (
    <>
      <Container>
        <OrderText
          onPress={() => {
            setModalVisibile(true);
          }}
        >
          Ordernar por <Bold>{filterText}</Bold>
        </OrderText>

        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <ModalOverlay
            onPress={() => {
              setModalVisibile(false);
            }}
            activeOpacity={1}
          >
            <ModalContainer>
              <ModalText onPress={handleBiggestPrice}>Maior Preço</ModalText>
              <ModalText onPress={handleLowestPrice}>Menor Preço</ModalText>
              <ModalText onPress={handleNewest}>Mais Recente</ModalText>
            </ModalContainer>
          </ModalOverlay>
        </Modal>

        <FiltersContainer
          onPress={() => {
            setShowFilters(!showFilters);
          }}
        >
          <FiltersIcon source={filtersIcon} />
          <FiltersText>Filtrar</FiltersText>
        </FiltersContainer>
      </Container>

      {!showFilters ? null : <ComplementFilters />}
    </>
  );
};

export default Filters;
