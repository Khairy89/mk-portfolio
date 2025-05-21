
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-dark py-20">
      <div className="section-padding">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Content Side */}
          <div>
            <p className="text-lg mb-6 text-light/90">
              I'm Khairy Fauzi, a passionate technology leader with expertise in web development, software architecture, and product management.
            </p>
            
            <p className="mb-6 text-light/80">
              With over 7 years of experience in the technology industry, I've had the opportunity to work on a diverse range of projects from custom web applications to enterprise-level systems. My approach combines strategic thinking, technical expertise, and user-centered design to deliver solutions that drive business value.
            </p>
            
            <p className="mb-6 text-light/80">
              I believe that good technology should solve real problems while being accessible and intuitive. My leadership philosophy centers around empowering teams, fostering innovation, and maintaining a relentless focus on delivering value to users and stakeholders.
            </p>
            
            <p className="text-light/80">
              When I'm not building digital products, you can find me exploring emerging technologies, mentoring aspiring developers, or enjoying time with family.
            </p>
            
            <Button className="mt-8 bg-teal hover:bg-teal/90 text-black">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
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
                <span className="text-4xl font-bold text-teal block mb-2">30+</span>
                <span className="text-light/70">Projects Completed</span>
              </div>
              <div className="bg-card p-6 rounded-lg text-center">
                <span className="text-4xl font-bold text-teal block mb-2">20+</span>
                <span className="text-light/70">Happy Clients</span>
              </div>
              <div className="bg-card p-6 rounded-lg text-center">
                <span className="text-4xl font-bold text-teal block mb-2">3</span>
                <span className="text-light/70">Companies Founded</span>
              </div>
            </div>
            
            {/* Education */}
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Bachelor of Computer Science</h4>
                  <p className="text-teal">Santo Tomas University</p>
                  <p className="text-sm text-light/70">2013 - 2017</p>
                </div>
                <div>
                  <h4 className="font-semibold">AWS Certified Solutions Architect</h4>
                  <p className="text-teal">Amazon Web Services</p>
                  <p className="text-sm text-light/70">2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
