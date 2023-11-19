import React, { FC } from "react";

import * as Styled from "./styled";

type CountBlockProps = {
  count?: number;
  maxCount?: number;
  responsive?: boolean;
  increment: () => void;
  decrement: () => void;
};

export const CountBlock: FC<CountBlockProps> = ({
  count,
  maxCount,
  responsive,
  increment,
  decrement,
}) => {
  return (
    <Styled.CountBlock $responsive={responsive}>
      <button onClick={decrement} disabled={count === 1}>
        -
      </button>
      <span>{count}</span>
      <button onClick={increment} disabled={count === maxCount}>
        +
      </button>
    </Styled.CountBlock>
  );
};
