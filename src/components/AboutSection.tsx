import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
const AboutSection = () => {
  return <section id="about" className="bg-dark py-0">
      <div className="section-padding">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Content Side */}
          <div>
            <p className="mb-6 text-light/90 text-base">
              I'm Khairy Fauzi, a passionate UI/UX designer dedicated to creating intuitive, engaging, and accessible digital experiences that solve real user problems.
            </p>
            
            <p className="mb-6 text-light/80">
              With 3 years of experience in the design industry, I've had the opportunity to work on a diverse range of projects from mobile applications to complex web platforms. My approach combines user research, creative problem-solving, and attention to detail to deliver designs that not only look great but also perform exceptionally.
            </p>
            
            <p className="mb-6 text-light/80">
              I believe that good design should be invisible, allowing users to accomplish their goals efficiently and enjoyably. My design philosophy centers around empathy, simplicity, and purpose – understanding user needs, reducing complexity, and ensuring every element serves a clear function.
            </p>
            
            <p className="text-light/80">
              When I'm not designing, you can find me exploring hiking trails, experimenting with photography, or attending local design meetups to stay connected with the creative community.
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
                <span className="text-4xl font-bold text-teal block mb-2">3+</span>
                <span className="text-light/70">Years Experience</span>
              </div>
              <div className="bg-card p-6 rounded-lg text-center">
                <span className="text-4xl font-bold text-teal block mb-2">20+</span>
                <span className="text-light/70">Projects Completed</span>
              </div>
              <div className="bg-card p-6 rounded-lg text-center">
                <span className="text-4xl font-bold text-teal block mb-2">15+</span>
                <span className="text-light/70">Happy Clients</span>
              </div>
              <div className="bg-card p-6 rounded-lg text-center">
                <span className="text-4xl font-bold text-teal block mb-2">5</span>
                <span className="text-light/70">Design Awards</span>
              </div>
            </div>
            
            {/* Education */}
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Certification</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Certified Artificial Intelligence Practitioner</h4>
                  <p className="text-teal">CertNexus</p>
                  <p className="text-sm text-light/70">ID : 2022003911</p>
                </div>
                <div>
                  <h4 className="font-semibold">Certified Data Science Practitioner</h4>
                  <p className="text-teal">CertNexus</p>
                  <p className="text-sm text-light/70">ID : 2022003911</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;