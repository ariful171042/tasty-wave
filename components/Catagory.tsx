"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { data } from "@/data/catagoryImages";
import Image from "next/image";
import Overlay from "./Overlay";
import SectionTitle from "./SectionTitle";

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
              <div className="w-full h-full relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover "
                />
                <Overlay />
                <div className="z-[3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                  <h3 className="text-5xl font-semibold">{item.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Catagory;
