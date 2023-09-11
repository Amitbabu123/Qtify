import React from 'react'
import styles from './HeroSection.module.css'
import HeroImage from '../HeroImage/HeroImage'
const HeroSection = () => {
  return (
    <nav className={styles.heroSection}>
    <HeroImage/>
    </nav>
  )
}

export default HeroSection