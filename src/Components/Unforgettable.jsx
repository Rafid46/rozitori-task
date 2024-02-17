import { Suspense } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Unforgettable = () => {
  return (
    <Suspense fallback="loading">
      <div className="">
        <div
          className="relative bg-cover bg-center w-full h-[600px]"
          style={{
            backgroundImage: `url("https://i.ibb.co/QMG8PJ2/unforegetable-banner.png")`,
          }}
        ></div>
        <div className="flex items-center justify-center">
          <div
            className="text-center absolute 
       flex items-center flex-col justify-center  bg-white w-[700px] h-[500px] rounded-full  rounded-br-none rounded-bl-none"
          >
            <p className="text-[#2d6838] tracking-[5px] font-medium">VENUES</p>
            <p className="font-caslon text-7xl text-[#2d6838] mb-10">
              Unforgettable <br /> Venues
            </p>
            <p className="font-kumbh font-light">
              24 Carrots is the exclusive or preferred caterer at Southern
              California’s most spectacular properties. From intimate
              understated spaces to large and luxurious, we’ll help you find the
              event venue that makes your heart skip a beat.
            </p>
            <div className="mt-8 text-sm flex items-center justify-center font-medium text-white">
              <button className="batton bg-[#C15627] rounded-full px-10 py-3 flex items-center hover:bg-[#ff7e47]">
                <span className="mr-2">EXPLORE VENUES</span>
                <FaArrowRightLong className="svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Unforgettable;
