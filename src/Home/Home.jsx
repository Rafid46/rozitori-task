import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Carrot from "../Components/Carrot";
import { IoIosArrowUp } from "react-icons/io";
import Magical from "../Components/Magical";
import Unforgettable from "../Components/Unforgettable";
import Gallery1 from "../Components/Gallery1";

const Home = () => {
  const [topButton, setTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="mb-20">
        <Banner></Banner>
      </div>
      <div className="my-20">
        <Carrot></Carrot>
      </div>
      <div className="my-20">
        <Magical></Magical>
      </div>
      <div className="mt-32">
        <Gallery1></Gallery1>
      </div>
      <div className="my-20">
        <Unforgettable></Unforgettable>
      </div>
      {topButton && (
        <div className="flex items-center justify-center">
          <button
            className="z-10 flex items-center fixed bg-[#a0d2aa] py-1 px-6 bottom-[0px] lg:bottom-[0px]  rounded-tl-[35px] rounded-tr-[35px] w-fit text-4xl text-[#1A4122FF]"
            onClick={scrollUp}
          >
            <IoIosArrowUp className="text-md mr-2" />
            <p className="text-xs tracking-[3px] font-medium">BACK TO TOP</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
