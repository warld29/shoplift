import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import item1 from "../assets/item1.jpg";
import item3 from "../assets/item3.jpg";
import item4 from "../assets/item4.jpg";
import item5 from "../assets/item5.jpg";
import item6 from "../assets/item6.jpg";
import item7 from "../assets/item7.jpg";
import item8 from "../assets/item8.jpg";
import item9 from "../assets/item9.jpg";
import item10 from "../assets/item10.jpg";

const Slider = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={3.6}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[100%]">
            <img className="rounded-md" src={item1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100%]">
            <img className="rounded-md" src={item3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100%]">
            <img className="rounded-md" src={item4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100%]">
            <img className="rounded-md" src={item5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100%]">
            <img className="rounded-md" src={item6} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100%]">
            <img className="rounded-md" src={item7} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100%]">
            <img className="rounded-md" src={item8} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100%]">
            <img className="rounded-md border-black" src={item9} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100%] h-[80%]">
            <img className="rounded-md" src={item10} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
