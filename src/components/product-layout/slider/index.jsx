import React, { memo, useState } from "react";

import * as Styled from "./styled";

const Slider = ({ images = [], title }) => {
  const [imageUrl, setImageUrl] = useState(images[0]);

  return (
    <div>
      <Styled.ImageBlock>
        <img
          src={imageUrl || images[0]}
          alt={title}
          loading='lazy'
        />
      </Styled.ImageBlock>
      <Styled.ChangingBlock>
        {images.map((url) => (
          <Styled.Button
            key={url}
            url={url}
            onClick={() => setImageUrl(url)}>
            <img
              src={url}
              alt={title}
              loading='lazy'
            />
          </Styled.Button>
        ))}
      </Styled.ChangingBlock>
    </div>
  );
};

export default memo(Slider);
