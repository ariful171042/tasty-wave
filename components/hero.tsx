"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { data } from "@/data/sliderData";

import { Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full h-[75vh]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full relative">
              <Image
                src={item.src}
                alt={item.alt}
                height={1920}
                width={1080}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute top-0 left-0 w-full h-full z-[1] bg-gradient-to-t from-black/75 to-transparent"></div>
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center z-[2] space-y-5">
                <h1 className="text-8xl font-semibold">{item.headline}</h1>
                <p className="text-lg ">{item.paragraph}</p>
                <Link href="/products" className="btn btn-accent">
                  {item.cta}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
