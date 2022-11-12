import React, { ChangeEvent, FC, useState } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as MoreIcon } from "assets/icons/more.svg";
import { selectCartTotalAmount } from "store";

import { Button } from "../../core-ui";

import * as Styled from "./styled";

const Total: FC = () => {
  const totalAmount = useSelector(selectCartTotalAmount);
  const [count, setCount] = useState(1);

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setCount(Number(e.target.value));
  };

  return (
    <Styled.CartTotal>
      <h5>Cart total</h5>
      <Styled.Content>
        <Styled.Subtotal>
          <p>Subtotal</p>
          <span>${totalAmount}</span>
        </Styled.Subtotal>
        <Styled.Form>
          <input type="text" placeholder="Enter coupon code" />
          <button>Apply</button>
        </Styled.Form>

        <Styled.SelectWrapper>
          <select value={count} onChange={changeHandler}>
            <option disabled>County</option>
            {[...Array(10)].map((_, index) => (
              <option key={index}>{index + 1}</option>
            ))}
          </select>
          <MoreIcon />
        </Styled.SelectWrapper>

        <Styled.TotalPrice>
          <p>Total amount</p>
          <span>${count * totalAmount}</span>
        </Styled.TotalPrice>

        <Button>Proceed to checkout</Button>
      </Styled.Content>
    </Styled.CartTotal>
  );
};

export { Total };
