// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

const Gallery1 = () => {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative w-[600px] h-[600px]">
          <img
            className="object-cover object-center w-full h-full"
            loading="lazy"
            src="https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-[#C15627] opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center flex-col justify-center cursor-pointer">
            <div className="text-sm flex items-center justify-center font-medium text-white">
              <button className="batton border-[1px] border-white  rounded-full px-10 py-3 flex items-center">
                <span className="mr-2">EXPLORE VENUES</span>
                <FaArrowRightLong className="svg" />
              </button>
            </div>
            <br />
            <p className="text-white text-3xl font-medium font-caslon">
              The Richland Orange
            </p>
            <hr className="w-[400px] mx-auto border-white border-[1px] my-5" />
            <p className="text-end text-white text-xl font-kumbh">Orange</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-[600px] h-[600px]">
          <img
            className="object-cover object-center w-full h-full"
            loading="lazy"
            src="https://24carrots.com/wp-content/uploads/2023/09/MAIN.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-[#C15627] opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center flex-col justify-center cursor-pointer">
            <div className="text-sm flex items-center justify-center font-medium text-white">
              <button className="batton border-[1px] border-white  rounded-full px-10 py-3 flex items-center">
                <span className="mr-2">EXPLORE VENUES</span>
                <FaArrowRightLong className="svg" />
              </button>
            </div>
            <br />
            <p className="text-white text-3xl font-medium font-caslon">
              Oak Creek Golf Club
            </p>
            <hr className="w-[400px] mx-auto border-white border-[1px] my-5" />
            <p className="text-end text-white text-xl font-kumbh">IRVINE</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-[600px] h-[600px]">
          <img
            className="object-cover object-center w-full h-full"
            loading="lazy"
            src="https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-4.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-[#C15627] opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center flex-col justify-center cursor-pointer">
            <div className="text-sm flex items-center justify-center font-medium text-white">
              <button className="batton border-[1px] border-white  rounded-full px-10 py-3 flex items-center">
                <span className="mr-2">EXPLORE VENUES</span>
                <FaArrowRightLong className="svg" />
              </button>
            </div>
            <br />
            <p className="text-white text-3xl font-medium font-caslon">
              Rancho Las Lomas
            </p>
            <hr className="w-[400px] mx-auto border-white border-[1px] my-5" />
            <p className="text-end text-white text-xl font-kumbh">SILVERADO</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-[600px] h-[600px]">
          <img
            className="object-cover object-center w-full h-full"
            loading="lazy"
            src="https://24carrots.com/wp-content/uploads/2023/08/7-31-5.png"
            alt=""
          />
          <div className="absolute inset-0 bg-[#C15627] opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center flex-col justify-center cursor-pointer">
            <div className="text-sm flex items-center justify-center font-medium text-white">
              <button className="batton border-[1px] border-white  rounded-full px-10 py-3 flex items-center">
                <span className="mr-2">EXPLORE VENUES</span>
                <FaArrowRightLong className="svg" />
              </button>
            </div>
            <br />
            <p className="text-white text-3xl font-medium font-caslon">
              Franciscan Gardens
            </p>
            <hr className="w-[400px] mx-auto border-white border-[1px] my-5" />
            <p className="text-end text-white text-xl font-kumbh">
              SAN JUAN CAPISTRANO
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-[600px] h-[600px]">
          <img
            className="object-cover object-center w-full h-full"
            loading="lazy"
            src="https://24carrots.com/wp-content/uploads/2023/08/9-7.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-[#C15627] opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center flex-col justify-center cursor-pointer">
            <div className="text-sm flex items-center justify-center font-medium text-white">
              <button className="batton border-[1px] border-white  rounded-full px-10 py-3 flex items-center">
                <span className="mr-2">EXPLORE VENUES</span>
                <FaArrowRightLong className="svg" />
              </button>
            </div>
            <br />
            <p className="text-white text-3xl font-medium font-caslon">
              The Colony House
            </p>
            <hr className="w-[400px] mx-auto border-white border-[1px] my-5" />
            <p className="text-end text-white text-xl font-kumbh">ANAHEIM</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-[600px] h-[600px]">
          <img
            className="object-cover object-center w-full h-full"
            loading="lazy"
            src="https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-3.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-[#C15627] opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center flex-col justify-center cursor-pointer">
            <div className="text-sm flex items-center justify-center font-medium text-white">
              <button className="batton border-[1px] border-white  rounded-full px-10 py-3 flex items-center">
                <span className="mr-2">EXPLORE VENUES</span>
                <FaArrowRightLong className="svg" />
              </button>
            </div>
            <br />
            <p className="text-white text-3xl font-medium font-caslon">
              Ole Hanson Beach Club
            </p>
            <hr className="w-[400px] mx-auto border-white border-[1px] my-5" />
            <p className="text-end text-white text-xl font-kumbh">
              SEN CLEMENTE
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-[600px] h-[600px]">
          <img
            className="object-cover object-center w-full h-full"
            loading="lazy"
            src="https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-[#C15627] opacity-0 hover:opacity-70 transition-opacity duration-500 flex items-center flex-col justify-center cursor-pointer">
            <div className="text-sm flex items-center justify-center font-medium text-white">
              <button className="batton border-[1px] border-white  rounded-full px-10 py-3 flex items-center">
                <span className="mr-2">EXPLORE VENUES</span>
                <FaArrowRightLong className="svg" />
              </button>
            </div>
            <br />
            <p className="text-white text-3xl font-medium font-caslon">
              AV Arvine
            </p>
            <hr className="w-[400px] mx-auto border-white border-[1px] my-5" />
            <p className="text-end text-white text-xl font-kumbh">IRVINE</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Gallery1;
