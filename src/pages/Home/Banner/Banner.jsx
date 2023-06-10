import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
}, [])
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
          <div className="absolute h-full left-0 top-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  rounded-xl">
            <div className="text-white space-y-5 text-center md:mt-64 mt-20" data-aos="zoom-in">
              <h2 className="text-2xl md:text-6xl font-bold">CAPTURE YOUR DREAM PHOTO</h2>
              <p className="text-xs md:text-xl w-3/4 text-center mx-auto">Join ChitroGolpo Photography School and learn how to capture
                powerful images that convey emotions and narratives.Discover your artistic vision and express it through the lens.</p>
              <button className="btn btn-info btn-xs sm:btn-sm md:btn-md text-white">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1547145695-0232437d417f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" alt="" />
          <div className="absolute h-full left-0 top-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  rounded-xl">
            <div className="text-white space-y-5 text-center md:mt-64 mt-20" data-aos="zoom-in">
              <h2 className="text-2xl md:text-6xl font-bold">CAPTURE YOUR DREAM PHOTO</h2>
              <p className="text-xs md:text-xl w-3/4 text-center mx-auto">Join ChitroGolpo Photography School and learn how to capture
                powerful images that convey emotions and narratives.Discover your artistic vision and express it through the lens.</p>
              <button className="btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/professional-photographer-takes-photos-with-camera-tripod-rocky-peak-sunset-dark-tone_335224-432.jpg?w=740&t=st=1686251124~exp=1686251724~hmac=e0b4f1e375c34774825ee84fe5d9c3c31d12c29c5a98664572b461dd4b6e221a" alt="" />
          <div className="absolute h-full left-0 top-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  rounded-xl">
            <div className="text-white space-y-5 text-center md:mt-64 mt-20" data-aos="zoom-in">
              <h2 className="text-2xl md:text-6xl font-bold">CAPTURE YOUR DREAM PHOTO</h2>
              <p className="text-xs md:text-xl w-3/4 text-center mx-auto">Join ChitroGolpo Photography School and learn how to capture
                powerful images that convey emotions and narratives.Discover your artistic vision and express it through the lens.</p>
              <button className="btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/silhouette-photographer-who-shoots-sunset-mountains_1150-7151.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.2.1999469744.1683008976&semt=ais" alt="" />
          <div className="absolute h-full left-0 top-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  rounded-xl">
            <div className="text-white space-y-5 text-center md:mt-64 mt-20" data-aos="zoom-in">
              <h2 className="text-2xl md:text-6xl font-bold">CAPTURE YOUR DREAM PHOTO</h2>
              <p className="text-xs md:text-xl w-3/4 text-center mx-auto">Join ChitroGolpo Photography School and learn how to capture
                powerful images that convey emotions and narratives.Discover your artistic vision and express it through the lens.</p>
              <button className="btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white">Learn More</button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;