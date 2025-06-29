
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
  
  // Update page title and meta description for home page
  useEffect(() => {
    document.title = 'Khairy Fauzi | Software Engineer & UI/UX Designer Portfolio';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio of Khairy Fauzi, Senior Software Engineer & UI/UX Designer with 7+ years of experience in automation, CRM solutions, and digital experiences. Specializing in Salesforce, Python, n8n workflows, and modern web development.');
    }
  }, []);
  
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
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
