import video from "../assets/videos/[FREE - HDconvert.com] 1104374_1080p_4k_2k_3840x2160.mp4";
import video2 from "../assets/videos/1104374_1080p_4k_2k_3840x2160.mp4";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <video
          className="w-full bg-fixed h-[800px] object-cover object-center"
          autoPlay
          loop
          muted
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="bg-opacity-60"></div>
        <div className="hero-content text-center text-white z-10">
          <div className="">
            <h1 className="mb-5 text-9xl font-caslon font-medium tracking-[2px]">
              Simply the finest
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
