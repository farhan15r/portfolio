import AboutMeSection from "./components/AboutMeSection";
import HeroSection from "./components/HeroSection";
import MyPortfolioSection from "./components/MyPortfolioSection";
import MySkillsSection from "./components/MySkillsSection";
import NavbarSection from "./components/NavbarSection";

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <HeroSection />
      <AboutMeSection />
      <MySkillsSection />
      <MyPortfolioSection />
    </div>
  );
}

export default App;
