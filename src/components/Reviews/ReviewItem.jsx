import React from "react";

// Styles
import Css from "./ReviewItem.module.css";

const ReviewItem = ({ review }) => {
  const RatingView = () => {
    const stars = [];
    for (let i = 0; i < review.reviewer_rating; i++) {
      stars.push(true);
    }
    return stars.map((star, i) => (
      <span className={Css.Star} key={i}>
        {star ? "★" : "☆"}
      </span>
    ));
  };
  return (
    <li className={Css.ReviewItem}>
      <div className={Css.Header}>
        <h2 className={Css.ProfilePicture}>
          {review.reviewer_name.charAt(0).toUpperCase()}
        </h2>
        <div className={Css.UserInfo}>
          <span className={Css.UserName}>{review.reviewer_name}</span>
          <div className={Css.Rating}>
            <RatingView />
          </div>
        </div>
      </div>
      <div className={Css.Content}>
        <p className={Css.Text}>{review.comment}</p>
      </div>
    </li>
  );
};

export default ReviewItem;
