import React, { FC, memo, useCallback } from "react";

import * as Styled from "./styled";

type CountBlockProps = {
  count?: number;
  maxCount?: number;
  responsive?: boolean;
  increment?: () => void;
  decrement?: () => void;
  setCount?: (Callback: (prev: number) => number) => void;
};

export const CountBlock: FC<CountBlockProps> = ({
  count,
  maxCount,
  responsive,
  increment,
  decrement,
  setCount,
}) => {
  const incrementHandler = useCallback(() => setCount(prev => prev + 1), []);
  const decrementHandler = useCallback(() => setCount(prev => prev - 1), []);

  return (
    <Styled.CountBlock $responsive={responsive}>
      <button
        onClick={decrement ? decrement : decrementHandler}
        disabled={count === 1}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={increment ? increment : incrementHandler}
        disabled={count === maxCount}
      >
        +
      </button>
    </Styled.CountBlock>
  );
};

export default memo(CountBlock);
