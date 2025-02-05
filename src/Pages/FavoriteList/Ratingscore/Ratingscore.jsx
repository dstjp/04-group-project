import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Ratingscore({ initialRating = 0, onRatingChange }) {
  const colors = {
    blue: "#006AFF",
    grey: "#a9a9a9",
  };
  const stars = Array(10).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  useEffect(() => {
    setCurrentValue(initialRating);
  }, [initialRating]);

  const handleClick = (value) => {
    setCurrentValue(value);
    onRatingChange(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div>
      {stars.map((star, i) => {
        const ratingValue = i + 1;
        return (
          <div key={i} style={{ display: "inline" }}>
            <FaStar
              key={i}
              size={24}
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
              color={
                (hoverValue || currentValue) > i ? colors.blue : colors.grey
              }
              onClick={() => handleClick(ratingValue)}
              onMouseOver={() => handleMouseOver(ratingValue)}
              onMouseLeave={() => handleMouseLeave()}
            />
          </div>
        );
      })}
    </div>
  );
}
