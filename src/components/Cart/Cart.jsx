import React from 'react';
import styles from './Cart.module.css';
import { Chip } from '@mui/material';

const Cart = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title } = data;
        // Include additional content along with follows count
        const chipLabel = `${follows} follows`;

        return (
          <div className={styles.wrapper}>
            <div className={styles.cart}>
              <img src={image} alt="album" />
              <div className={styles.banner}>
                {/* Use the modified chipLabel */}
                <Chip className={styles.chip} label={chipLabel} size="small" />
              </div>
            </div>
            <div className={styles.titleWrraper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  }
  return getCard(type);
}

export default Cart;
