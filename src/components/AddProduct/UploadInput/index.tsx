import React, { SetStateAction } from "react";
import { Container, Icon, Image, ImageContainer, Title } from "./styled";
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
      const images = result.assets.slice(0, 6);

      if (result.assets.length > 6) {
        Alert.alert("Removemos as imagens adicionais. Limite de 6 imagens.");
      }

      setImages(images);
    } else {
      Alert.alert("Você não selecionou imagens");
    }
  };

  return (
    <>
      <Container onPress={handlePickUpImage}>
        <Title>Selecione até 6 imagens.</Title>
        <Icon source={uploadIcon} />
      </Container>
      <ImageContainer>
        {images &&
          images.map((image) => (
            <Image key={image.assetId} source={{ uri: image.uri }} />
          ))}
      </ImageContainer>
    </>
  );
};

export default UploadInput;
