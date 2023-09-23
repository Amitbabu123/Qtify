// import React, { useEffect } from "react";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import  { Navigation } from "swiper";
// import CarouselLeftNavigation from "../Carousel/CarouselLeftNavigation";
// import CarouselRightNavigation from "../Carousel/CarouselRightNavigation";
// import "swiper/css";
// import styles from "./Carousel.module.css";

// const Controls = ({ data }) => {
//   const swiper = useSwiper();
//     useEffect(() => {
//     swiper.slideTo(0);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [data]);
//   return <></>;
// };

// const Carousel = ({ data, component }) => {
//   return (
//     <div className={styles.wrapper}>
//       <Swiper
//         style={{ padding: "0px 20px" }}
//         initialSlide={0}
//         modules={[Navigation]}
//         slidesPerView={"auto"}
//         spaceBetween={40}
//         allowTouchMove
//       >
//         <Controls data={data} />
//         <CarouselLeftNavigation />
//         <CarouselRightNavigation />
//         {data.map((item) => {
//           return <SwiperSlide>{component(item)}</SwiperSlide>;
//         })}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;


import React, { useEffect } from "react";
import { Swiper, SwiperSlide,useSwiper } from "swiper/react"; // Import Swiper without the Navigation module
import "swiper/css";
import styles from "./Carousel.module.css";
import SwiperCore, { Navigation } from 'swiper';

// Initialize the Navigation module
SwiperCore.use([Navigation]);

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return <></>;
};

const Carousel = ({ data, component }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        navigation={true} // Enable navigation here
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        {data.map((item) => {
          return <SwiperSlide>{component(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;

