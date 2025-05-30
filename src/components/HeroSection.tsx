
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal/40 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center gap-10">
        {/* Content */}
        <div className="w-full flex flex-col items-center text-center">
          <div 
            className="text-teal mb-2" 
            contentEditable="true" 
            suppressContentEditableWarning={true}
            style={{ outline: 'none' }}
          >
            UI/UX Designer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span 
              contentEditable="true" 
              suppressContentEditableWarning={true}
              style={{ outline: 'none' }}
            >
              Hi, I'm 
            </span>
            <span 
              className="text-teal" 
              contentEditable="true" 
              suppressContentEditableWarning={true}
              style={{ outline: 'none' }}
            >
              Khairy Fauzi
            </span>
          </h1>
          
          {/* Image Container - Now positioned under the title */}
          <div className="w-full flex justify-center mb-6">
            <div className="relative">
              {/* Khairy's profile image */}
              <div className="rounded-2xl bg-gradient-to-br from-dark to-muted p-1 shadow-xl">
                <div className="w-64 h-80 md:w-80 md:h-96 rounded-xl bg-muted overflow-hidden">
                  <img 
                    src="/lovable-uploads/35615b55-ae83-4b0c-906f-81584f934797.png"
                    alt="Khairy Fauzi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-teal/20 blur-2xl z-0"></div>
            </div>
          </div>
          
          <p 
            className="text-xl md:text-2xl text-light/80 mb-6 max-w-lg" 
            contentEditable="true" 
            suppressContentEditableWarning={true}
            style={{ outline: 'none' }}
          >
            A Software Engineer with 7 years of experience crafting automation workflows and intuitive digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-teal hover:bg-teal/90 text-black font-medium"
              onClick={() => scrollToSection('projects')}
            >
              <span 
                contentEditable="true" 
                suppressContentEditableWarning={true}
                style={{ outline: 'none' }}
              >
                Explore My Work
              </span>
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-teal text-teal hover:bg-teal/10"
              onClick={() => scrollToSection('contact')}
            >
              <span 
                contentEditable="true" 
                suppressContentEditableWarning={true}
                style={{ outline: 'none' }}
              >
                Get in Touch
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
