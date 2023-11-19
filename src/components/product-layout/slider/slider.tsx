import React, { FC, useState } from "react";

import Controls from "./controls/controls";

import * as Styled from "./styled";

type SliderProps = {
  images: string[];
  title: string;
};

const Slider: FC<SliderProps> = ({ images = [], title }) => {
  const [imageUrl, setImageUrl] = useState(images[0]);

  return (
    <div>
      <Styled.ImageBlock>
        <Styled.Image src={imageUrl || images[0]} alt={title} loading="lazy" />
      </Styled.ImageBlock>

      <Controls images={images} setImageUrl={setImageUrl} title={title} />
    </div>
  );
};

export { Slider };
