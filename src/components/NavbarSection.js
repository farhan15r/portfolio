const NavbarSection = () => {
  //hamburger transition
  const hamburgerClick = () => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#hero"
              className="font-bold text-primary text-lg block py-6"
            >
              farhan15r
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              onClick={hamburgerClick}
              className="block absolute right-4 lg:hidden"
            >
              <span className="hamburger-line origin-top-left"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line origin-bottom-left"></span>
            </button>

            <nav
              id="nav-menu"
              className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#hero"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    About Me
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#skills"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    My Skills
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    My Portfolio
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarSection;
