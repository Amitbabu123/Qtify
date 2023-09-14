import React from 'react'
import styles from './HeroSection.module.css'
import HeroImage from '../../assets/hero-image.svg'
const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
    <div>
      <h1>100 Thousand Songs, ad-free</h1>
      <h1>Over thousands podcast episodes </h1>
    </div>
    <div>
      <img src={HeroImage} width={212} alt="headphones" />
    </div>
     </div>
  )
}

export default HeroSection