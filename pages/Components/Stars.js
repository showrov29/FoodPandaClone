

import React from 'react';

const Stars = ({ rating }) => {
  const filledStars = Math.min(5, Math.max(0, rating));
  const emptyStars = 5 - filledStars;

  const filledStarsArray = Array.from({ length: filledStars }, (_, index) => (
    <span key={index} className="star-filled text-pink-500">★</span>
  ));

  const emptyStarsArray = Array.from({ length: emptyStars }, (_, index) => (
    <span key={index} className="star-empty">☆</span>
  ));

  return (
    <div className="star-rating">
      {filledStarsArray}
      {emptyStarsArray}
    </div>
  );
};

export default Stars;
