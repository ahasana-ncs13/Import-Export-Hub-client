import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";
import { Link } from "react-router";

const Slider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://import-export-hub-server-phi.vercel.app/slider")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt-6 md:mt-17 relative w-full h-[70vh] bg-lime-200 sm:h-[65vh] lg:h-[60vh]  overflow-hidden rounded-2xl">
      <Swiper
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={800}
        parallax={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="h-[60vh]"
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="grid grid-cols-1 lg:grid-cols-3 h-[60vh] items-center w-11/12 mx-auto gap-6 lg:gap-8">
              {/* Text */}
              <div
                className="flex flex-col justify-center max-w-2xl p-4 sm:p-6 col-span-1"
                data-swiper-parallax="-300"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
                  {slide.product}
                </h2>
                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                  {slide.caption}
                </p>
                <Link
                  to="/allproducts"
                  className="inline-block bg-primary text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg hover:bg-secondary transition-all duration-300 w-fit"
                >
                  Import An Product
                </Link>
              </div>

              {/* Image */}
              <div className=" col-span-2">
                <img
                  src={slide.image_url}
                  alt={slide.product}
                  className="w-full max-w-sm sm:max-w-md lg:max-w-5xl h-38 sm:h-54 md:h-62 lg:h-[40vh] object-cover rounded-2xl shadow-lg"
                  data-swiper-parallax="-100"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/20 pointer-events-none"></div>
    </div>
  );
};

export default Slider;
