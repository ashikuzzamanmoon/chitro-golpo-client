import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
    return (
        <div>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://img.freepik.com/free-photo/camera-photographic-with-smartphone-devices-generative-ai_188544-12171.jpg?w=826&t=st=1686087650~exp=1686088250~hmac=25d4f28fff073b06f92c26e9d1020013e3384ad5d6695c1ff1eaac0a5db6440b" alt="" />
            <h2 className="absolute top-1/2 bottom-1/2 right-1/2 left-1/2 text-red-700">CAPTURE YOUR DREAM PHOTO</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://img.freepik.com/free-photo/camera-photographic-with-smartphone-devices-generative-ai_188544-12171.jpg?w=826&t=st=1686087650~exp=1686088250~hmac=25d4f28fff073b06f92c26e9d1020013e3384ad5d6695c1ff1eaac0a5db6440b" alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;