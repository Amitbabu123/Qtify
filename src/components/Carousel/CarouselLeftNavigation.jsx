import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { ReactComponent as LeftArrow } from '../../assets/LeftArrow.svg';
import styles from './Carousel.module.css'
const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBegining, setIsBeginning] = useState(swiper.isBeginning);
    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsBeginning(swiper.isBeginning);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div className={styles.leftNavigation}>
         {isBegining && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation