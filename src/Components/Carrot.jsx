// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Carrot = () => {
  return (
    <div className="max-w-screen-[1200px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-center mr-[200px]">
          <p className="font-kumbh text-[#2e743c]">WELCOME TO 24 CARROTS</p>
          <h1 className="text-9xl font-medium text-[#1a4122] tracking-tighter font-caslon">
            Remarkable <br />
            Catering & <br />
            Events
          </h1>
          <p className="font-kumbh text-[#a4c7ab] font-medium">
            24 Carrots is the premier catering and events company of choice in
            Southern California. We create remarkable experiences by offering
            the finest quality foods and providing unsurpassed personalized
            service, driven by our passion for life’s special occasions. GET IN
            TOUCH
          </p>
          <div className="text-md  font-medium text-[#1a4122]">
            <button className="tracking-[2px] px-4 py-1 text-white rounded-full bg-[#C15627]">
              GET IN TOUCH
            </button>
          </div>
        </div>
        {/* swiper */}
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
                className="rounded-tl-[250px] w-[780px] h-[445px] object-cover object-center"
                src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="rounded-tl-[250px] w-[780px] h-[445px] object-cover object-center"
                src="https://24carrots.com/wp-content/uploads/2023/10/1.3-Holly-Sigafoos-Photo.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="rounded-tl-[250px] w-[780px] h-[445px] object-cover object-center"
                src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="rounded-tl-[250px] w-[780px] h-[445px] object-cover object-center"
                src="https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="rounded-tl-[250px] w-[780px] h-[445px] object-cover object-center"
                src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carrot;
