// Cart.jsx

import React from "react";
import styles from "./Cart.module.css";
import MovieImage from "../../assets/MovieImage.png"; // Import your image

const Cart = ({ followers, title }) => {
  return (
    <div className={styles.maincard}>
      <div className={styles.imageContainer}>
        <img src={MovieImage} alt="cartImage" className={styles.image} />
      </div>
      <div className={styles.followersContainer}>
        <div className={styles.followers}>
          <span className={styles.followersCount}>{followers}</span> Followers
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default Cart;
