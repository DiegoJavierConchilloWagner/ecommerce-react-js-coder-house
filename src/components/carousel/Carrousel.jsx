import React from "react";
import "./Carousel.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules

import SwiperCore, {Pagination,Navigation,Autoplay} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation,Autoplay]);

const Carrousel = () => {
  return (
    <>
      <Swiper autoplay={{delay: 2500,disableOnInteraction: false}} slidesPerView={1} spaceBetween={30} loop={true} pagination={{
        "clickable": true }} navigation={true} className="mySwiper">
        <SwiperSlide><img src="https://res.cloudinary.com/doejsqlbl/image/upload/v1626420608/reactJs/Carrousel/slider1_kgtrb7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/doejsqlbl/image/upload/v1626420608/reactJs/Carrousel/slider_hu6g7i.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/doejsqlbl/image/upload/v1626420607/reactJs/Carrousel/slider2_clljde.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carrousel
