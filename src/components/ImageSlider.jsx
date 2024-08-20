import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import imgOne from "../assets/images/download-1.jpg";
import imgTwo from "../assets/images/download-2.jpg";
import imgThree from "../assets/images/download-3.jpg";
import imgFour from "../assets/images/download-4.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ImageSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img style={{ width: "100%", height: "90vh" }} src={imgOne} alt="one" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ width: "100%", height: "90vh" }} src={imgTwo} alt="two" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%", height: "90vh" }}
          src={imgThree}
          alt="three"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%", height: "90vh" }}
          src={imgFour}
          alt="four"
        />
      </SwiperSlide>
    </Swiper>
  );
}
