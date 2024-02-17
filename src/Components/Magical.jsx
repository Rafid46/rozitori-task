const Magical = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-center justify-center">
        <div className="mr-20">
          <img
            loading="lazy"
            className="w-[500px] object-cover object-center rounded-tl-full rounded-tr-full"
            src="https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="font-caslon text-[#2d6838] -tracking-[5px] text-5xl lg:text-9xl">
            Making Every <br />
            Experience <br />
            Magical
          </p>
          <div className="flex items-center justify-center mt-10 mb-7">
            <p className="mr-[100px] lg:mr-[200px] text-2xl font-caslon text-[#2d6838]">
              Weddings
            </p>
            <p className="text-2xl font-kumbh text-[#2d6838]">
              Execeptional Weddings
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="mr-6 lg:mr-20">
              <p className="">
                <span className="text-2xl font-caslon text-[#2d6838] ">
                  Social
                </span>{" "}
                <br />
                <span className="text-2xl font-caslon text-[#2d6838] ">
                  Corporate
                </span>{" "}
                <br />
                <span className="text-2xl font-caslon text-[#2d6838] ">
                  Venues
                </span>
              </p>
            </div>
            <div>
              <p className="ml-10 lg:ml-20 w-[150px] lg:w-[300px]">
                We don’t put you in a box. Each venue is unique to each party,
                and our curated list of event spaces and venue partners offers
                easy access with personalized service at Southern California’s
                premier locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magical;
