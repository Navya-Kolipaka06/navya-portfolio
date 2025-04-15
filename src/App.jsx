
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/herosection/HeroMain'
import SubHeroSection from './components/herosection/SubHeroSection'
import AboutMeMain from './components/aboutme/AbountMeMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import Subskills from './components/skillsSection/Subskills'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import ContactMeMain from './components/contactmeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'

function App() {
  

  return (
    <main className="font-body">
      <NavbarMain/>
      <HeroMain/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillsMain/>
      <Subskills/>
      <ExperienceMain/>
      <ProjectsMain/>
      <ContactMeMain/>
      <FooterMain/>
      
      
    </main>
  )
}

export default App
