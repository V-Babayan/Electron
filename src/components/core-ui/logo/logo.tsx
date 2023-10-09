import React, { FC } from "react";

import { LogoIcon } from "~/assets/icons";

import * as Styled from "./styled";

const Logo: FC<{ blue?: boolean }> = ({ blue }) => {
  return (
    <Styled.Logo $blue={blue}>
      <LogoIcon />
      Electron
    </Styled.Logo>
  );
};

export { Logo };
