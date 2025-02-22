import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Ratingscore({ initialRating = 0, onRatingChange }) {
  // can be simplified by moving the colors object inside the return
  // since this array is to count to 10 it can be simplfied in the return
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  useEffect(() => {
    setCurrentValue(initialRating);
  }, [initialRating]);

  const handleClick = (value) => {
    setCurrentValue(value);
    onRatingChange(value);
  };

  // can be simplified to one line
  const handleMouseOver = (newHoverValue) => setHoverValue(newHoverValue);
  // can be simplified to one line
  const handleMouseLeave = () => setHoverValue(undefined);

  return (
    <div>
      {Array.from({ length: 10 }, (_, i) => {
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
              color={(hoverValue || currentValue) > i ? "006AFF" : "a9a9a9"}
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
