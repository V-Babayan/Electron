import React from "react";

import logoIcon from "assets/icons/logo.png";
import * as Styled from "./styled";

const Logo = (props) => {
  return (
    <Styled.Logo {...props}>
      <img
        src={logoIcon}
        alt='Logo'
        loading='lazy'
        height='48'
        width='44'
      />
      Electron
    </Styled.Logo>
  );
};

export { Logo };
