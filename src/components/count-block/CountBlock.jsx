import React, { memo } from "react";
import { SCountBlock } from "./CountBlock.styled";

const CountBlock = ({ count, maxCount, responsive, increment, decrement }) => {
  return (
    <SCountBlock responsive={responsive}>
      <button
        onClick={decrement}
        disabled={count === 1}>
        -
      </button>
      <span>{count}</span>
      <button
        onClick={increment}
        disabled={count === maxCount}>
        +
      </button>
    </SCountBlock>
  );
};

export default memo(CountBlock);
