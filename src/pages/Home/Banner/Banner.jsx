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
            <img src="https://images.unsplash.com/photo-1617459840892-6d97e6359eae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxwaG90b2dyYXBoeSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h2 className="absolute top-1/2 bottom-1/2 right-1/2 left-1/2 text-red-700">CAPTURE YOUR DREAM PHOTO</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1547145695-0232437d417f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" alt="" />
            <h2 className="absolute top-1/2 bottom-1/2 right-1/2 left-1/2 text-red-700">CAPTURE YOUR DREAM PHOTO</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://img.freepik.com/premium-photo/camera-with-lens-pastel-colored-surface_175682-5405.jpg?w=740" alt="" />
            <h2 className="absolute top-1/2 bottom-1/2 right-1/2 left-1/2 text-red-700">CAPTURE YOUR DREAM PHOTO</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://img.freepik.com/free-photo/professional-photographer-takes-photos-with-camera-tripod-rocky-peak-sunset-dark-tone_335224-432.jpg?w=740&t=st=1686251124~exp=1686251724~hmac=e0b4f1e375c34774825ee84fe5d9c3c31d12c29c5a98664572b461dd4b6e221a" alt="" />
            <h2 className="absolute top-1/2 bottom-1/2 right-1/2 left-1/2 text-red-700">CAPTURE YOUR DREAM PHOTO</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://img.freepik.com/premium-photo/photographer-taking-self-portrait-woman-using-camera-taking-photo-dark-tone-front-view-selective-focus-lense-straight-into-camera_34048-994.jpg?w=740" alt="" />
            <h2 className="absolute top-1/2 bottom-1/2 right-1/2 left-1/2 text-red-700">CAPTURE YOUR DREAM PHOTO</h2>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;