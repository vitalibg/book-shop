import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

interface RatingComponentProps {
  defaultRating: number;
}

const RatingComponent = ({ defaultRating }: RatingComponentProps) => {
  const [rating, setRating] = useState(defaultRating);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div>
      <Rating
        initialValue={defaultRating}
        onClick={handleRating}
        size={20}
        transition
        fillColor="green"
        emptyColor="gray"
      />
      {/*{rating}*/}
    </div>
  );
};

export default RatingComponent;
