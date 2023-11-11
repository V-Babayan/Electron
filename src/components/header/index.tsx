import React from "react";
// import { Link } from "react-router-dom";
// import { useMedia } from "hooks";

// import { HOME_PAGE } from "helpers";

// import { Logo } from "components/core-ui/";
// import {
//   HeaderTopButtons,
//   Menu,
//   CategoriesMenu,
//   HeaderSearchForm,
// } from "./children";

// import * as Styled from "./styled";

const Header = () => {
  // const isNotebook = useMedia("notebook");

  return (
    <header>
      {/* <Styled.HeaderTop>
        <Link to={HOME_PAGE}>
          <Logo />
        </Link>

        <HeaderSearchForm />

        <HeaderTopButtons />
      </Styled.HeaderTop>

      <Styled.HeaderBottom>
        <CategoriesMenu />
        <Menu />

        {isNotebook && <Styled.HeaderBottomHeading>30 Days Free Return</Styled.HeaderBottomHeading>}
      </Styled.HeaderBottom> */}
    </header>
  );
};

export { Header };
