"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import foot1 from "../../../imgs/foot1.jpg";
import foot2 from "../../../imgs/foot2.jpg";
import foot3 from "../../../imgs/foot3.jpg";
import foot4 from "../../../imgs/foot4.jpg";
import foot5 from "../../../imgs/foot5.jpg";
import foot6 from "../../../imgs/foot6.jpg";
import foot7 from "../../../imgs/foot7.jpg";
import foot8 from "../../../imgs/foot8.jpg";
export default function OurArts() {
  SwiperCore.use([Autoplay]);
  return (
    <motion.div className="our-arts-box-page ">
      <h3 className="skills-title d-flex justify-content-center ">
        This are all the skills i learn & use
      </h3>
      <div className="container d-flex justify-content-center">
        <Swiper
          /* spaceBetween={20} */
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 2000 }}
          onSlideChange={() => {}}
        >
          <SwiperSlide>
            <Image
              src={foot1}
              height={500}
              style={{ width: "100%" }}
              alt="img-refskology"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={foot2}
              style={{ width: "100%" }}
              height={500}
              alt="img-refskology"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={foot3}
              height={500}
              style={{ width: "100%" }}
              alt="img-refskology"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={foot4}
              height={500}
              style={{ width: "100%" }}
              alt="img-refskology"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={foot5}
              height={500}
              style={{ width: "100%" }}
              alt="img-refskology"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={foot6}
              height={500}
              style={{ width: "100%" }}
              alt="img-refskology"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={foot7}
              height={500}
              style={{ width: "100%" }}
              alt="img-refskology"
            ></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
}
