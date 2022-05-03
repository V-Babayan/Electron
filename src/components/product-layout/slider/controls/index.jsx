import { memo } from "react";

import { Control } from "./Control";

import * as Styled from "./styled";

const Controls = ({ images, setImageUrl, title }) => {
  return (
    <Styled.Controls>
      {images.map((url) => (
        <Control
          key={url}
          url={url}
          setImageUrl={setImageUrl}
          title={title}
        />
      ))}
    </Styled.Controls>
  );
};

export default memo(Controls);
