"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


export default function CollegeSlider() {

     const campuses = [
    {
      name: "Universitas Ahmad Yani Yogyakarta",
      desc: "Universitas Jenderal Achmad Yani Yogyakarta merupakan Lembaga Pendidikan...",
      image: "/assets/univ/unjaniyk.png",
    },
    {
      name: "Universitas Harapan Bangsa",
      desc: "Universitas dengan reputasi unggul dan prospek kerja cerah.",
      image: "/assets/univ/matana.png",
    },
    {
      name: "Universitas Mercu Buana",
      desc: "Universitas terkemuka dengan fasilitas modern.",
      image: "/assets/univ/esa-unggul.png",
    },
    {
      name: "Universitas Mercu Buana",
      desc: "Universitas terkemuka dengan fasilitas modern.",
      image: "/assets/univ/matana.png",
    },
  ];

  return (
    <div className="h-[80vh] bg-white">
      <div className="mx-auto max-w-7xl py-10 px-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
            Mau kuliah di kampus favorit?
          </h1>

          <p className="text-sm md:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto">
            Temukan kampus yang banyak diminati dengan reputasi baik, lulusan
            berkualitas, dan prospek kerja yang cerah
          </p>
        </div>
      </div>

      <div className="mt-10 mx-auto max-w-7xl px-4h-96 flex items-center p-4">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-14 pt-6"
      >
        {campuses.map((campus, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group h-[360px]">
              <Image
                src={campus.image}
                alt={campus.name}
                width={500}
                height={300}
                className="w-full h-60 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-blue-900 text-lg">
                  {campus.name}
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  {campus.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}
