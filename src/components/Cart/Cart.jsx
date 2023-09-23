import React from 'react';
import styles from './Cart.module.css';
import { Chip, Tooltip } from '@mui/material';

function Cart({ data, type }){
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title,  songs } = data;
        // Include additional content along with follows count
        // const chipLabel = `${follows} follows`;

        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.cart}>
              <img src={image} alt="album" />
              <div className={styles.banner}>
                {/* Use the modified chipLabel */}
                <Chip label={`${follows} Follows`} size="small" className={styles.chip}  />
              </div>
            </div>
            <div className={styles.titleWrraper}>
              <p>{title}</p>
            </div>
          </div>
          </Tooltip>
        );
      }
      case "song":{
            const {image, likes, title} = data;
            return(
              <div className={styles.wrapper}>
                <div className={styles.cart}>
                  <img src={image} alt="song" loading="lazy"/>
                  <div className={styles.banner}>
                    <div className={styles.pill}>
                      <p>{likes} Likes</p>
                    </div>
                  </div>
                </div>
                <div className={styles.titleWrraper}>
                  <p>{title}</p>
                </div>
              </div>
            )
      }
      default:
        return <></>;
    }
  }
  return getCard(type);
}

export default Cart;
