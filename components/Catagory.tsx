"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { data } from "@/data/catagoryImages";
import Image from "next/image";
import Overlay from "./Overlay";
import SectionTitle from "./SectionTitle";
import CatagorySliderItem from "./CatagorySliderItem";

const Catagory = () => {
  return (
    <section className="py-20">
      {/*---SECTION gose here--*/}
      <SectionTitle
        subtitle={"Categories"}
        tittle={"Browse our all categories"}
      />

      <div className="w-full h-[50vh] lg:h-[75vh] ">
        {/* Slider goes here */}
        <Swiper
          speed={750}
          loop={true}
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CatagorySliderItem
                name={item.name}
                image={item.src}
                alt={item.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Catagory;
