import profile from "../images/profile.png";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 md:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hello guys... 👋, I'm
              <span className="block font-bold text-4xl text-dark mt-1 lg:text-5xl">
                Farhan Ramadhan
              </span>
            </h1>
            <h2 className="font-medium text-dark60 text-lg mb-5 lg:text-xl">
              Student in Mercu Buana University
            </h2>
            <p className="font-medium text-dark40 mb-10 leading-relaxed">
              Keep coding and stay awsome!! <br />
              And don't forget semicolumn!
            </p>
            <a
              href="mailto:nak.rokesselalu@gmail.com"
              className="text-base font-semibold text-white bg-primary py-3 px-6 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>

          <div className="w-full self-end px-4 md:w-1/2">
            <div className="mt-10 relative md:mt-0 md:right-0">
              <img
                src={profile}
                alt="profile"
                className="mx-auto rounded-full md:1/2 lg:w-2/3"
                width="400px"
              />
              <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-80 md:-bottom-10 lg:scale-110 lg:bottom-0">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  widht="400"
                  height="400"
                >
                  <path
                    fill="#06b6d4"
                    d="M36.7,-39.2C49.7,-32.8,63.9,-23.3,69.9,-9.4C75.9,4.6,73.7,22.9,64.2,34.9C54.7,47,38,52.7,23.1,53.9C8.3,55.1,-4.7,51.8,-21.5,49.7C-38.3,47.6,-58.9,46.8,-65.6,37C-72.3,27.2,-65.1,8.5,-57.5,-5.9C-49.9,-20.3,-41.9,-30.3,-32.3,-37.4C-22.6,-44.4,-11.3,-48.4,0.3,-48.7C11.8,-49,23.7,-45.7,36.7,-39.2Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
