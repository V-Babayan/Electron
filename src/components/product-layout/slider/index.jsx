import React, { useState } from "react";

import Controls from "./controls";

import * as Styled from "./styled";

const Slider = ({ images = [], title }) => {
  const [imageUrl, setImageUrl] = useState(images[0]);

  return (
    <div>
      <Styled.ImageBlock>
        <Styled.Image
          src={imageUrl || images[0]}
          alt={title}
          loading='lazy'
        />
      </Styled.ImageBlock>

      <Controls
        images={images}
        setImageUrl={setImageUrl}
        title={title}
      />
    </div>
  );
};

export { Slider };
