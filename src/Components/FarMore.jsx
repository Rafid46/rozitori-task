import { FaArrowRightLong } from "react-icons/fa6";

const FarMore = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-[#2d6838]  text-5xl lg:text-9xl tracking-normal lg:-tracking-[8px] font-medium font-caslon text-center">
        Far More Than <br /> Just Business
      </p>
      <p className="font-kumbh text-[#add9b5] w-[400px] lg:w-[900px] text-center mt-10">
        The way you do anything is the way you do everything. We haven’t cracked
        the code on catering; we simply <br /> care unreasonably about every
        aspect of what we do. We care about people as much as we care about{" "}
        <br />
        details, and we absolutely refuse to compromise on making your day
        anything but the best. We’ve got your <br /> back from the initial idea
        to the final farewell!
      </p>
      <div>
        <div className="mt-10">
          <iframe
            src="https://www.youtube.com/embed/7gPP9hsV4a0?si=AVRMz8ET-0xcwhor"
            title="YouTube video player"
            allowFullScreen
            className="w-[400px] lg:w-[1200px] h-[200px] lg:h-[600px]"
          ></iframe>
        </div>
      </div>
      <div>
        <p className="mt-10 text-[#2d6838] text-5xl lg:text-9xl tracking-normal lg:-tracking-[8px] font-medium font-caslon text-center">
          Great Food & A <br /> Whole Lot More
        </p>
        <p className="font-kumbh text-[#add9b5] w-[400px] lg:w-[900px] text-center mt-10">
          Catering is just the beginning. Sure, we love astonishing your guests
          with attentive service, thoughtful food, and <br /> an inviting
          environment. But what really matters most is helping you create
          memories that will last for a lifetime. <br /> Our industry experts
          think of all the little things that turn an ordinary event into an
          unforgettable experience.
        </p>
        <div className="mt-8 text-sm flex items-center justify-center font-medium text-white">
          <button className="batton bg-[#C15627] rounded-full px-10 py-3 flex items-center hover:bg-[#ff7e47]">
            <span className="mr-2">EXPLORE SERVICES</span>
            <FaArrowRightLong className="svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarMore;
