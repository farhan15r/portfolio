import image from "../images/portfolio/1.png";

const MyPortfolioSection = () => {
  return (
    <section id="portfolio" class="pt-36 pb-16 bg-dark20">
      <div class="container">
        <div class="w-full px-4">
          <div class="max-width-xl mx-auto text-center mb-16">
            <h4 class="font-bold uppercase text-primary text-lg mb-3">
              Portfolio
            </h4>
            <h2 class="font-bold text-3xl text-dark mb-4 lg:text-4xl">
              My Projects
            </h2>
          </div>
        </div>

        <div class="w-full flex flex-wrap px-4 justify-center xl:w-10/12 xl:mx-auto">
          <div class="mb-12 p-4 md:w-1/2 text-center">
            <a
              href="http://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="rounded-md shadow-md overflow-hidden">
                <img src={image} alt="" class="w-full" />
              </div>
            </a>
            <h3 class="font-semibold text-dark text-xl mt-5 mb-3">
              Lorem ipsum dolor sit amet.
            </h3>
          </div>
          <div class="mb-12 p-4 md:w-1/2 text-center">
            <a
              href="http://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="rounded-md shadow-md overflow-hidden">
                <img src={image} alt="" class="w-full" />
              </div>
            </a>
            <h3 class="font-semibold text-dark text-xl mt-5 mb-3">
              Lorem ipsum dolor sit amet.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolioSection;
