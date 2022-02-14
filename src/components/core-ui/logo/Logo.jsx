import React from "react";

import logoIcon from "../../../assets/icons/logo.png";
import { SLogo } from "./Logo.styled";

const Logo = (props) => {
  return (
    <SLogo {...props}>
      <img
        src={logoIcon}
        alt='Logo'
        loading='lazy'
        height='48'
        width='44'
      />
      Electron
    </SLogo>
  );
};

export default Logo;
