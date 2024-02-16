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
          <source
            src="https://24carrots.com/wp-content/video/24carrtos-home-banner.mp4"
            type="video/mp4"
          />
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
