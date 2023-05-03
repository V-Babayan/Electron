import { ReactComponent as CheckbirdIcon } from "assets/icons/checkbird.svg";

import { Rating } from "components/core-ui/";

import * as Styled from "./styled";
import { AddToCartForm } from "./add-to-cart-form";

const Info = ({ product }) => {
  return (
    <div>
      <Styled.InfoContainer>
        <Styled.ProductName>{product.title}</Styled.ProductName>
        <Styled.ProductPrice>${product.price}</Styled.ProductPrice>
        <Rating
          defRating={product.rating}
          big
        />
        <Styled.ProductHaveIndicator>
          Availability: <CheckbirdIcon />
          <span>In stock</span>
        </Styled.ProductHaveIndicator>
        <div>
          {product.count
            ? `Hurry up! only ${product.count} product left in stock!`
            : "Sory this product isn't in stock"}
        </div>
      </Styled.InfoContainer>
      <AddToCartForm product={product} />
    </div>
  );
};

export { Info };
