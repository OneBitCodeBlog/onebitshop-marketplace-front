import React, { useEffect, useState } from "react";
import favoriteService from "../../../services/favoriteService";
import { LikeButton, LikeImage } from "./styled";

interface Props {
  favorites: boolean;
  productId: string;
}

const like = require("../../../../assets/icons/like.png");
const liked = require("../../../../assets/icons/liked.png");

const Like = ({ favorites, productId }: Props) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const FavoriteToogle = (favorited: boolean) => {
    if (favorited === true) {
      favoriteService.delFavorite(productId);
      setIsFavorited(false);
    } else {
      favoriteService.setFavorite(productId);
      setIsFavorited(true);
    }
  };

  useEffect(() => {
    setIsFavorited(favorites);
  }, [favorites]);

  return (
    <>
      {!isFavorited ? (
        <LikeButton
          onPress={() => {
            FavoriteToogle(isFavorited);
          }}
        >
          <LikeImage source={like} />
        </LikeButton>
      ) : (
        <LikeButton
          onPress={() => {
            FavoriteToogle(isFavorited);
          }}
        >
          <LikeImage source={liked} />
        </LikeButton>
      )}
    </>
  );
};

export default Like;
