import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import CareerSection from "./CareerSection";
import SkillSection from "./SkillSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";

const MainPage = () => {
  return (
    <main className="bg-black text-white scroll-smooth w-full">
      <section id="home">
        <div className="w-full">
          <HomeSection />
        </div>
      </section>

      <section id="about">
        <div className="w-full">
          <AboutSection />
        </div>
      </section>

      <section id="career">
        <div className="w-full">
          <CareerSection />
        </div>
      </section>

      <section id="skills">
        <div className="w-full">
          <SkillSection />
        </div>
      </section>

      <section id="projects">
        <div className="w-full">
          <ProjectSection />
        </div>
      </section>

      <section id="contact">
        <div className="w-full">
          <ContactSection />
        </div>
      </section>
    </main>
  );
};

export default MainPage;
