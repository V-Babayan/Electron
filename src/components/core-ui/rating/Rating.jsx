import React, { memo, useState } from "react";
import { StarrButton, StarrRating } from "./Rating.styled";

const Rating = ({ defRating, setDefRating, big }) => {
  const [rating, setRating] = useState(defRating);
  const [hover, setHover] = useState(defRating);

  return (
    <StarrRating defRating={defRating}>
      {[...Array(5)].map((_, index) => {
        index++;
        return (
          <StarrButton
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
          </StarrButton>
        );
      })}
    </StarrRating>
  );
};

export default memo(Rating);
