import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
const AboutSection = () => {
  return <section id="about" className="bg-dark py-0">
      <div className="section-padding">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Content Side */}
          <div>
            <p className="mb-6 text-light/90 text-base">I'm Khairy Fauzi, a Senior Software Engineer and creative technologist with a passion for crafting automated solutions, intuitive UI/UX designs, and AI-powered digital solution.</p>
            
            <p className="mb-6 text-light/80">With 7 years of experience in tech and a growing freelance practice under Nexflow, I help businesses streamline operations, elevate user experiences, and unlock new creative possibilities through automation and artificial intelligence.</p>
            
            <p className="mb-6 text-light/80">From building seamless n8n workflows to designing clean, responsive websites and generating AI-based video and branding assets—my work is all about making complex ideas feel simple, efficient, and impactful.</p>
            
            <p className="text-light/80">I believe that great digital experiences should be intelligent, frictionless, and future-ready—and I bring that philosophy into every project I take on</p>
          </div>
          
          {/* Stats & Skills Side */}
          <div className="flex flex-col gap-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg text-center">
                <span className="text-4xl font-bold text-teal block mb-2">7+</span>
                <span className="text-light/70">Years Experience</span>
              </div>
              <div className="bg-card p-6 rounded-lg text-center">
                <span className="text-4xl font-bold text-teal block mb-2">60+</span>
                <span className="text-light/70">Projects Completed</span>
              </div>
              <div className="bg-card p-6 rounded-lg text-center">
                <span className="text-4xl font-bold text-teal block mb-2">40+</span>
                <span className="text-light/70">Happy Clients</span>
              </div>
              <div className="bg-card p-6 rounded-lg text-center">
                <span className="text-4xl font-bold text-teal block mb-2">9</span>
                <span className="text-light/70">Design Awards</span>
              </div>
            </div>
            
            {/* Education */}
            <div className="bg-card p-6 rounded-lg">
              <div className="flex gap-4">
                <Button className="bg-teal hover:bg-teal/90 text-black" onClick={() => window.location.href='/certification'}>
                  View Certifications
                </Button>
                <Button className="bg-teal hover:bg-teal/90 text-black">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;