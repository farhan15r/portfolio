import portfolio from "../images/portfolio/portfolio.png";
import menitcom from "../images/portfolio/menitcom.png";
import ketaTravel from "../images/portfolio/keta-travel.png";
import ketaTravelCI4 from "../images/portfolio/keta-travel-ci4.png";

const MyPortfolioSection = () => {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-dark20">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-width-xl mx-auto text-center mb-16">
            <h4 className="font-bold uppercase text-primary text-lg mb-3">
              Portfolio
            </h4>
            <h2 className="font-bold text-3xl text-dark mb-4 lg:text-4xl">
              My Projects
            </h2>
          </div>
        </div>

        <div className="w-full flex flex-wrap px-4 justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2 text-center justify-center">
            <div className="rounded-md shadow-lg overflow-hidden">
              <img src={portfolio} alt="" className="w-full" />
            </div>
            <h3 className="font-semibold text-dark text-xl mt-5 mb-3 md:text-2xl">
              Portfolio
            </h3>
            <div className="flex flex-wrap justify-center">
              <a
                href="https://farhan15r.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-9 mx-3 flex justify-center items-center rounded-full border border-dark40 hover:border-primary hover:bg-primary hover:text-white"
              >
                Website
              </a>
              <a
                href="https://github.com/farhan15r/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-9 mx-3 flex justify-center items-center rounded-full border border-dark40 hover:border-primary hover:bg-primary hover:text-white"
              >
                Repository
              </a>
            </div>
          </div>
          <div className="mb-12 p-4 md:w-1/2 text-center justify-center">
            <div className="rounded-md shadow-lg overflow-hidden">
              <img src={menitcom} alt="" className="w-full" />
            </div>
            <h3 className="font-semibold text-dark text-xl mt-5 mb-3 md:text-2xl">
              Menit.com
            </h3>
            <div className="flex flex-wrap justify-center">
              <a
                href="https://menitcom.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-9 mx-3 flex justify-center items-center rounded-full border border-dark40 hover:border-primary hover:bg-primary hover:text-white"
              >
                Website
              </a>
              <a
                href="https://github.com/farhan15r/menit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-9 mx-3 flex justify-center items-center rounded-full border border-dark40 hover:border-primary hover:bg-primary hover:text-white"
              >
                Repository
              </a>
            </div>
          </div>
          <div className="mb-12 p-4 md:w-1/2 text-center justify-center">
            <div className="rounded-md shadow-lg overflow-hidden">
              <img src={ketaTravel} alt="" className="w-full" />
            </div>
            <h3 className="font-semibold text-dark text-xl mt-5 mb-3 md:text-2xl">
              Keta Travel
            </h3>
            <div className="flex flex-wrap justify-center">
              <a
                href="https://farhan15r.github.io/KetaTravel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-9 mx-3 flex justify-center items-center rounded-full border border-dark40 hover:border-primary hover:bg-primary hover:text-white"
              >
                Website
              </a>
              <a
                href="https://github.com/farhan15r/KetaTravel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-9 mx-3 flex justify-center items-center rounded-full border border-dark40 hover:border-primary hover:bg-primary hover:text-white"
              >
                Repository
              </a>
            </div>
          </div>
          <div className="mb-12 p-4 md:w-1/2 text-center justify-center">
            <div className="rounded-md shadow-lg overflow-hidden">
              <img src={ketaTravelCI4} alt="" className="w-full" />
            </div>
            <h3 className="font-semibold text-dark text-xl mt-5 mb-3 md:text-2xl">
              Keta Travel (CI4)
            </h3>
            <div className="flex flex-wrap justify-center">
              <a
                href="https://github.com/farhan15r/UAS-peweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-9 mx-3 flex justify-center items-center rounded-full border border-dark40 hover:border-primary hover:bg-primary hover:text-white"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolioSection;
