import React from "react";
import {
  Button,
  Container,
  InfoContainer,
  InteractionsContainer,
  Like,
  Price,
  Share,
  SubTitle,
  SubtitleContainer,
} from "./styled";
import BackIcon from "../../components/common/BackIcon";
import { Title } from "./styled";
import Carousel from "../../components/Product/Carousel";
import Description from "../../components/Product/Description";
import SellerInfo from "../../components/Product/SellerInfo";
import DefaultButton from "../../components/common/DefaultButton";

const images = [
  {
    filename: "image1",
    url: "https://files.tecnoblog.net/wp-content/uploads/2020/11/ps5-review-5-1060x596.jpg",
  },
  {
    filename: "image2",
    url: "https://classic.exame.com/wp-content/uploads/2021/05/ps5-the-squad-foto-1.jpg?quality=70&strip=info&w=984",
  },
  {
    filename: "image3",
    url: "https://cdn.awsli.com.br/1824/1824967/produto/186131938/67bd1ea8d4.jpg",
  },
  {
    filename: "image4",
    url: "https://cdn.awsli.com.br/600x700/1734/1734513/produto/97494476/030cda119d.jpg",
  },
];

const like = require("../../../assets/icons/like.png");
const share = require("../../../assets/icons/share.png");

const Product = () => {
  const description =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero assumenda, totam corrupti aut voluptatibus repellat ullam explicabo exercitationem tenetur doloribus quis expedita consectetur! Aliquam quo error excepturi minus voluptatem asperiores, distinctio voluptas eius pariatur repudiandae adipisci officia nisi temporibus facere unde similique et dolorum odio vitae iste libero quibusdam voluptates modi. Sed velit facere illum vitae aperiam sint fugit ut possimus magni quis quasi architecto obcaecati praesentium quam voluptatum eaque ullam sunt totam, molestiae nulla ipsa atque delectus. Odio, deleniti.;";

  return (
    <Container contentContainerStyle={{ paddingBottom: 50 }}>
      <BackIcon marginLeft={30} />

      <Title>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
        tenetur?
      </Title>
      <SubtitleContainer>
        <SubTitle>Publicado em 10/04/23</SubTitle>
        <SubTitle>Recife, PE</SubTitle>
      </SubtitleContainer>

      <Carousel images={images} />

      <InfoContainer>
        <Price>R$ 2500</Price>

        <InteractionsContainer>
          <Button>
            <Like source={like} />
          </Button>

          <Button>
            <Share source={share} />
          </Button>
        </InteractionsContainer>
      </InfoContainer>

      <Description desc={description} />

      <SellerInfo />

      <DefaultButton
        buttonText="FALE COM O VENDEDOR"
        buttonType={"primary"}
        marginVertical={0}
        buttonHandle={() => {}}
      />
    </Container>
  );
};

export default Product;
