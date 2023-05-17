import * as Styled from "./styled";

const CountBlock = ({ count, maxCount, responsive, increment, decrement }) => {
  return (
    <Styled.CountBlock responsive={responsive}>
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
    </Styled.CountBlock>
  );
};

export { CountBlock };
