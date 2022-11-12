import React, { FC } from "react";

import { LogoIcon } from "~/assets/icons";

import * as Styled from "./styled";

const Logo: FC<{ blue?: boolean }> = ({ blue }) => {
  return (
    <Styled.Logo $blue={blue}>
      <img src={LogoIcon} alt="Logo" loading="lazy" height="48" width="44" />
      Electron
    </Styled.Logo>
  );
};

export { Logo };
