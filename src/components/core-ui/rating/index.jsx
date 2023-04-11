import React, { memo, useState } from "react";

import * as Styled from "./styled";

const Rating = ({ defRating, setDefRating, big }) => {
  const [rating, setRating] = useState(defRating);
  const [hover, setHover] = useState(defRating);

  return (
    <Styled.StarrRating defRating={defRating}>
      {[...Array(5)].map((_, index) => {
        index++;
        return (
          <Styled.StarrButton
            key={index}
            active={index <= (hover || rating || defRating)}
            onClick={() => {
              // setDefRating(index);
              setRating(index);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            big={big}>
            &#9733;
          </Styled.StarrButton>
        );
      })}
    </Styled.StarrRating>
  );
};

export default memo(Rating);
