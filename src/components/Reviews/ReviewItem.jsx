import React from "react";

// Styles
import Css from "./ReviewItem.module.css";

const ReviewItem = ({ review }) => {
  return (
    <li className={Css.ReviewItem}>
      <div className={Css.Header}>
        <div className={Css.ProfilePicture}>
          {review.reviewer_name.charAt(0).toUpperCase()}
        </div>
        <div className={Css.UserInfo}>
          <span className={Css.UserName}>{review.reviewer_name}</span>
          <span className={Css.Rating}>Rating: {review.rating} / 5</span>
        </div>
      </div>
      <div className={Css.Content}>
        <p className={Css.Text}>{review.comment}</p>
      </div>
    </li>
  );
};

export default ReviewItem;
