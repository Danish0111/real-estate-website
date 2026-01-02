import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <div
        className="w-full px-6 py-24 flex justify-center items-center text-center"
        style={{
          backgroundImage: "url('/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          About Us
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center py-16 px-6 md:px-20 bg-[#ebdac3] gap-8 lg:gap-20 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          What we are?
        </h1>

        <p className="leading-relaxed max-w-2xl text-gray-800">
          We are a modern real estate platform focused on delivering premium
          properties with transparent processes and exceptional service.
          Our mission is to help people find homes that reflect their lifestyle,
          comfort, and long-term investment goals.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center px-6 md:px-20 py-16 gap-10 lg:gap-20">
        <img
          className="w-full max-w-md lg:max-w-lg rounded-lg"
          src="https://hourty.wpbingosite.com/wp-content/uploads/2020/03/banner-about.jpg"
          alt="Building"
        />

        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            The Building Overview
          </h1>

          <div className="flex flex-col gap-4 leading-7 text-gray-600">
            <p>
              Introducing Hourty Complex, the stunning new addition to the
              downtown Manhattan skyline. A perfect blend of breathtaking
              architecture and awe-inspiring interiors.
            </p>

            <p>
              Sleek and sophisticated, Costix offers qualities always coveted,
              but rarely obtained in the finest New York rental residences —
              with over 10,000 sq. ft. of indoor and outdoor amenities.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center px-6 md:px-20 py-16 gap-10 lg:gap-20">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Strategy, Mission, Vision
          </h1>

          <div className="flex flex-col gap-4 leading-7 text-gray-600">
            <p>
              Do you want to be even more successful? Learn to love learning and
              growth. The more effort you put into improving your skills, the
              bigger the payoff.
            </p>

            <p>
              Learning to walk was hard at first, but gradually it became
              effortless. The same applies to growth and success.
            </p>
          </div>
        </div>

        <img
          className="w-full max-w-md lg:max-w-lg rounded-lg"
          src="/mission.jpg"
          alt="Mission"
        />
      </div>

    </div>
  );
};

export default page;
