
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ToolsSection from '@/components/ToolsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('animated');
        }
      });
    };
    
    // Initialize animations
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  
  // Update page title
  useEffect(() => {
    document.title = 'Khairy Fauzi | UI/UX Designer';
  }, []);
  
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection 
          primaryButtonText="Explore My Work"
          primaryButtonTarget="projects"
          secondaryButtonText="Get in Touch"
          secondaryButtonTarget="contact"
          jobTitle="Senior Software Engineer"
          name="Khairy Fauzi"
          greeting="Hi, I'm "
          description="A UI/UX designer with 3 years of experience crafting intuitive and engaging digital experiences."
        />
        <ExperienceSection />
        <ProjectsSection />
        <ToolsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
