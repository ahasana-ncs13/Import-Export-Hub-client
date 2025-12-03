import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {

    const [data , setData]=useState([])

  useEffect(() => {
    fetch('https://import-export-hub-server-phi.vercel.app/slider')
    .then(res=>res.json())
    .then(data=>{
        setData(data)
        // console.log(data)   
    })
  }, []);

  return (
    <>
    <div className="w-11/12 mx-auto my-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            data.map(slide => <SwiperSlide key={slide._id}>
                <h1 className="text-center text-xl mb-3 text-primary font-semibold">{slide.caption}</h1>
                <img className="w-500 mx-auto h-140 rounded-2xl object-cover" src={slide.image_url} alt={slide.product} />
            </SwiperSlide>) 
        }
        
      </Swiper>
      </div>
    </>
  );
};

export default Slider;
