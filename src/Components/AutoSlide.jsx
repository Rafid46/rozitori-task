// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AutoSlide = () => {
  return (
    <div>
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
  
        </SwiperSlide>
      </Swiper> */}
      <div className="w-[500px]">
        <img
          loading="lazy"
          src="https://24carrots.com/wp-content/uploads/2023/10/Home_Services_GIF_R3.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default AutoSlide;
