
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Linkedin, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-5 w-20 h-20 sm:top-20 sm:left-10 sm:w-32 sm:h-32 lg:w-64 lg:h-64 rounded-full bg-teal blur-3xl"></div>
        <div className="absolute bottom-10 right-5 w-24 h-24 sm:bottom-20 sm:right-10 sm:w-40 sm:h-40 lg:w-80 lg:h-80 rounded-full bg-teal/40 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 xl:gap-16">
        {/* Image Container */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-start order-2 lg:order-1 mt-4 lg:mt-0">
          <div className="relative">
            {/* Khairy's profile image */}
            <div className="rounded-2xl bg-gradient-to-br from-dark to-muted p-1 shadow-xl">
              <div className="w-48 h-60 xs:w-56 xs:h-72 sm:w-64 sm:h-80 md:w-72 md:h-90 lg:w-80 lg:h-96 xl:w-96 xl:h-[28rem] rounded-xl bg-muted overflow-hidden">
                <img 
                  src="/assets/35615b55-ae83-4b0c-906f-81584f934797.png"
                  alt="Khairy Fauzi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:-bottom-4 sm:-right-4 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-teal/20 blur-2xl -z-10"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
          <span 
            className="text-teal mb-2 text-sm sm:text-base lg:text-lg" 
            contentEditable="true" 
            suppressContentEditableWarning={true}
          >
            Senior Software Engineer
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
            <span 
              contentEditable="true" 
              suppressContentEditableWarning={true}
            >
              Hi, I'm 
            </span>
            <span 
              className="text-teal" 
              contentEditable="true" 
              suppressContentEditableWarning={true}
            >
              Khairy Fauzi
            </span>
          </h1>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-light/80 mb-6 sm:mb-8 max-w-2xl leading-relaxed px-2 sm:px-0" 
            contentEditable="true" 
            suppressContentEditableWarning={true}
          >
            A Software Engineer with 7 years of experience crafting automation tools and solutions for businesses.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 relative z-10 w-full sm:w-auto">
            <button 
              onClick={() => window.open('https://www.linkedin.com/in/khairifauzi/', '_blank')}
              className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 rounded-md px-6 sm:px-8 bg-teal hover:bg-teal/90 text-white font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-sm sm:text-base whitespace-nowrap"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
              Connect on LinkedIn
            </button>
            
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/Resume.pdf';
                link.download = 'Khairy_Fauzi_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 rounded-md px-6 sm:px-8 border border-teal text-teal hover:bg-teal hover:text-white font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-sm sm:text-base whitespace-nowrap"
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
