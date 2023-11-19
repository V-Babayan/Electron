import React, { Dispatch, FC, memo, SetStateAction } from "react";

import { Control } from "./control";

import * as Styled from "./styled";

type ControlsProps = {
  images: string[];
  setImageUrl: Dispatch<SetStateAction<string>>;
  title: string;
};

const Controls: FC<ControlsProps> = ({ images, setImageUrl, title }) => {
  return (
    <Styled.Controls>
      {images.map(url => (
        <Control key={url} url={url} setImageUrl={setImageUrl} title={title} />
      ))}
    </Styled.Controls>
  );
};

export default memo(Controls);
