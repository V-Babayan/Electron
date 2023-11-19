import React, { Dispatch, FC, SetStateAction } from "react";

import * as Styled from "./styled";

const Control: FC<{
  url: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  title: string;
}> = ({ url, setImageUrl, title }) => {
  const changeImageHandler = () => setImageUrl(url);

  return (
    <Styled.Control onClick={changeImageHandler}>
      <Styled.Image src={url} alt={title} loading="lazy" />
    </Styled.Control>
  );
};

export { Control };
