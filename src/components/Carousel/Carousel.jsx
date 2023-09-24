import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import  { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "../Carousel/CarouselLeftNavigation";
import CarouselRightNavigation from "../Carousel/CarouselRightNavigation";
import styles from "./Carousel.module.css";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  
    useEffect(() => {
    swiper.slideTo([0],100);
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
        modules={Navigation}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => {
          return <SwiperSlide>{component(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;


