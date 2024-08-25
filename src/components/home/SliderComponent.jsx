// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";

const SliderComponent = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const fetchSliders = () => {
      axiosInstance
        .get("/settings/getsliders")
        .then((res) => setSliders(res.data?.sliders))
        .catch((err) => console.log(err));
    };

    fetchSliders();
  }, []);

  return (
    <div className="home_slider">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, FreeMode, Autoplay]}
        className="mySwiper"
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 1000,
        }}
        // slidesPerView={2}
      >
        {sliders?.map((slider) => (
          <SwiperSlide key={slider?.index}>
            <img
              className="slider_img"
              src={slider?.image}
              alt={`Image-${slider?.title}`}
            ></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
