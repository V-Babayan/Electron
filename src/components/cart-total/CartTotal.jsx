import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";
import Button from "../core-ui/button/Button";
import { Content, Form, SCartTotal, SelectWrapper, Subtotal, TotalPrice } from "./CartTotal.styled";

const CartTotal = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [count, setCount] = useState(1);

  const subtotal = useMemo(
    () =>
      cart
        ? cart.reduce(
            (prevValue, curValue) => curValue.count * curValue.product.price + prevValue,
            0
          )
        : 0,
    [cart]
  );

  return (
    <SCartTotal>
      <h5>Cart total</h5>
      <Content>
        <Subtotal>
          <p>Subtotal</p>
          <span>${subtotal}</span>
        </Subtotal>
        <Form>
          <input
            type='text'
            placeholder='Enter coupon code'
          />
          <button>Apply</button>
        </Form>

        <SelectWrapper>
          <select
            value={count}
            onChange={(e) => setCount(e.target.value)}>
            <option disabled>County</option>
            {[...Array(10)].map((_, index) => (
              <option key={index}>{index + 1}</option>
            ))}
          </select>
          <MoreIcon />
        </SelectWrapper>

        <TotalPrice>
          <p>Total amount</p>
          <span>${count * subtotal}</span>
        </TotalPrice>

        <Button>Proceed to ckeckout</Button>
      </Content>
    </SCartTotal>
  );
};

export default CartTotal;
