import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg';
import styles from './Carousel.module.css'
const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIIsEnd] = useState(swiper.isEnd);
    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIIsEnd(swiper.isEnd);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div className={styles.rightNavigation}>
         {isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation;