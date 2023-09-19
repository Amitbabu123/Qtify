import React from 'react'
import heroImage from '../../assets/heroImage.png'
import styles from './HeroImage.module.css';


const HeroImageComponent = () => {
  return (
    <img src={heroImage} alt="logo" className={styles.heroImage} />
  )
}

export default HeroImageComponent
