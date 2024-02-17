// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Carrot = () => {
  return (
    <div className="max-w-screen-[300px] lg:max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around">
        <div className="text-center">
          <p className="font-kumbh tracking-[5px] text-[#2d6838] mb-7">
            WELCOME TO 24 CARROTS
          </p>
          <h1 className="text-5xl lg:text-9xl font-medium text-[#1a4122] tracking-tighter font-caslon mb-7">
            Remarkable <br />
            Catering & <br />
            Events
          </h1>
          <p className="font-kumbh text-xs lg:text-md text-[#a4c7ab] font-normal leading-5 lg:leading-5 mb-7">
            24 Carrots is the premier catering and events company of <br />{" "}
            choice in Southern California. We create remarkable <br />{" "}
            experiences by offering the finest quality foods and providing{" "}
            <br />
            unsurpassed personalized service, driven by our passion for <br />{" "}
            life’s special occasions.
          </p>
          <div className="text-sm flex items-center justify-center font-medium text-white">
            <button className="batton bg-[#C15627] rounded-full px-8 py-2 flex items-center hover:bg-[#ff7e47]">
              <span className="mr-2">GET IN TOUCH</span>
              <FaArrowRightLong className="svg" />
            </button>
          </div>
        </div>
        {/* swiper */}
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-10"
        >
          <SwiperSlide className="pr-1">
            <div>
              <img
                loading="lazy"
                className="block rounded-tl-[250px] w-[400px] lg:w-[780px] h-[445px] object-cover object-center"
                src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pr-1">
            <div>
              <img
                loading="lazy"
                className="block rounded-tl-[250px] w-[780px] h-[445px] object-cover object-center"
                src="https://24carrots.com/wp-content/uploads/2023/10/1.3-Holly-Sigafoos-Photo.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pr-1">
            <div>
              <img
                loading="lazy"
                className="block rounded-tl-[250px] w-[780px] h-[445px] object-cover object-center"
                src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pr-1">
            <div>
              <img
                loading="lazy"
                className="block rounded-tl-[250px] w-[780px] h-[445px] object-cover object-center"
                src="https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pr-1">
            <div>
              <img
                loading="lazy"
                className="block rounded-tl-[250px] w-[780px] h-[445px] object-cover object-center"
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
