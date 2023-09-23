// import React, { useEffect, useState } from 'react'
// import { useSwiper } from 'swiper/react'
// import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg';
// import styles from './Carousel.module.css'
// const CarouselRightNavigation = () => {
//     const swiper = useSwiper();
//     const [isEnd, setIIsEnd] = useState(swiper.isEnd);
//     useEffect(()=>{
//         swiper.on("slideChange", function(){
//             setIIsEnd(swiper.isEnd);
//         })
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     },[])
//   return (
//     <div className={styles.rightNavigation}>
//          {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
//     </div>
//   )
// }

// export default CarouselRightNavigation;


import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg';
import styles from './Carousel.module.css'

const CarouselRightNavigation = () => {
    const swiper = useSwiper(); // You should import useSwiper from 'swiper/react' if you haven't already.

    const [isEnd, setIsEnd] = useState(false); // Initialize isEnd to false.

    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsEnd(swiper.isEnd);
        });
    }, [swiper]);

    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    );
};

export default CarouselRightNavigation;
