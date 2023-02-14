import React, { memo, useState } from "react";
import { ImageBlock, ChangingBlock, SButton } from "./ProductSlider.styled";

const ProductSlider = ({ images = [], title }) => {
  const [imageUrl, setImageUrl] = useState(images[0]);

  return (
    <div>
      <ImageBlock>
        <img
          src={imageUrl || images[0]}
          alt={title}
          loading='lazy'
        />
      </ImageBlock>
      <ChangingBlock>
        {images.map((url) => (
          <SButton
            key={url}
            url={url}
            onClick={() => setImageUrl(url)}>
            <img
              src={url}
              alt={title}
              loading='lazy'
            />
          </SButton>
        ))}
      </ChangingBlock>
    </div>
  );
};

export default memo(ProductSlider);
