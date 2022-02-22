import React, { useCallback, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { HeaderTop, SForm, ButtonsContainer, HeaderLink, HeaderBottom } from "./Header.styled";

import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";
import Dropdown from "../dropdown/Dropdown";
import Logo from "../core-ui/logo/Logo";
import Menu from "../menu/Menu";
import { PRODUCTS_PAGE } from "../../helpers/consts";
import { getCategories } from "../../helpers/filters";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  const location = useLocation();
  const categories = useMemo(() => getCategories(products), [products]);

  const [query, setQuery] = useState("");

  const clickHandler = useCallback(() => navigate(PRODUCTS_PAGE, { state: { query } }), [query]);
  const changeHandler = useCallback((e) => setQuery(e.target.value), []);

  return (
    <header>
      <HeaderTop>
        <Link to={"/"}>
          <Logo />
        </Link>

        {location.pathname !== PRODUCTS_PAGE && (
          <SForm>
            <input
              type='text'
              placeholder='Search...'
              value={query}
              onChange={changeHandler}
            />
            <button onClick={clickHandler}>Search</button>
          </SForm>
        )}

        <ButtonsContainer>
          <Link to={"/login"}>
            <HeaderLink>
              <ProfileIcon />
              Sign in
            </HeaderLink>
          </Link>

          <Link to={"/cart"}>
            <HeaderLink cartSize={cart.length}>
              <div>
                <CartIcon />
              </div>
              Cart
            </HeaderLink>
          </Link>
        </ButtonsContainer>
      </HeaderTop>

      <HeaderBottom>
        <Dropdown
          defaultTitle={"Browse categories"}
          options={categories}
          primary
        />
        <Menu />

        {window.matchMedia("(min-width: 992px)").matches && <h5>30 Days Free Return</h5>}
      </HeaderBottom>
    </header>
  );
};

export default Header;
