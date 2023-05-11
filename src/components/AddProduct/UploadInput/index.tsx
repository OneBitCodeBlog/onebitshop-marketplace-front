import React, { SetStateAction } from "react";
import { Container, Icon, Title } from "./styled";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

const uploadIcon = require("../../../../assets/icons/arrow-right.png");

interface ImagesProps {
  images: ImagePicker.ImagePickerAsset[];
  setImages: React.Dispatch<SetStateAction<ImagePicker.ImagePickerAsset[]>>;
}

const UploadInput = ({ images, setImages }: ImagesProps) => {
  const handlePickUpImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 6,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets) {
      setImages(result.assets);
    } else {
      Alert.alert("Você não selecionou imagens");
    }
  };

  return (
    <Container onPress={handlePickUpImage}>
      <Title>UploadInput</Title>
      <Icon source={uploadIcon} />
    </Container>
  );
};

export default UploadInput;
