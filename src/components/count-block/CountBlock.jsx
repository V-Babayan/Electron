import React, { memo } from "react";
import { SCountBlock } from "./CountBlock.styled";

const CountBlock = ({ count, setCount, maxCount }) => {
  return (
    <SCountBlock>
      <button
        onClick={() => setCount((prev) => prev - 1)}
        disabled={count === 1}>
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        disabled={count === maxCount}>
        +
      </button>
    </SCountBlock>
  );
};

export default memo(CountBlock);
