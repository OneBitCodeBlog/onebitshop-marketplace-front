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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In error quibusdam officia eos minima suscipit, necessitatibus, sequi hic quia quo quaerat? Quia facere deleniti minus necessitatibus veniam aut recusandae voluptatum labore eius suscipit tempore deserunt quae qui repellat, libero nostrum.";

  return (
    <Container>
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
    </Container>
  );
};

export default Product;
