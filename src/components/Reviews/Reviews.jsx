import React from "react";

// Styles
import Css from "./Reviews.module.css";

// Components
import ReviewItem from "../Reviews/ReviewItem";

const Reviews = ({ data }) => {
  return (
    <div className={Css.ReviewsContainer}>
      <ul className={Css.ReviewsList}>
        {data && data.length > 0 ? (
          data.map((review, index) => (
            <ReviewItem key={index} review={review} />
          ))
        ) : (
          <div>No reviews yet.</div>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
