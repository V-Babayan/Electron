import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Logo } from "~/components/core-ui";
import { EDeviceNames, ERoutePaths } from "~/helpers";
import { useMedia } from "~/hooks";

import {
  CategoriesMenu,
  HeaderSearchForm,
  HeaderTopButtons,
  Menu,
} from "./children";

import * as Styled from "./styled";

export const Header: FC = () => {
  const isNotebook = useMedia(EDeviceNames.notebook);

  return (
    <header>
      <Styled.HeaderTop>
        <Link to={ERoutePaths.HOME_PAGE}>
          <Logo />
        </Link>

        <HeaderSearchForm />

        <HeaderTopButtons />
      </Styled.HeaderTop>

      <Styled.HeaderBottom>
        <CategoriesMenu />
        <Menu />

        {isNotebook && (
          <Styled.HeaderBottomHeading>
            30 Days Free Return
          </Styled.HeaderBottomHeading>
        )}
      </Styled.HeaderBottom>
    </header>
  );
};
