import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Swiperr = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img
              className="rounded-tl-[250px] w-[777.98px] h-[445px] object-cover object-center"
              src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="rounded-tl-[250px] w-[777.98px] h-[445px] object-cover object-center"
              src="https://24carrots.com/wp-content/uploads/2023/10/1.3-Holly-Sigafoos-Photo.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="rounded-tl-[250px] w-[777.98px] h-[445px] object-cover object-center"
              src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="rounded-tl-[250px] w-[777.98px] h-[445px] object-cover object-center"
              src="https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="rounded-tl-[250px] w-[777.98px] h-[445px] object-cover object-center"
              src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swiperr;
