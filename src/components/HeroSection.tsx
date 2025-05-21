
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal/40 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {/* Image Container */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-start order-2 md:order-1 mt-8 md:mt-0">
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
        
        {/* Content */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2">
          <span className="text-teal mb-2">Technology Leader & Developer</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-teal">Khairy Fauzi</span>
          </h1>
          <p className="text-xl md:text-2xl text-light/80 mb-6 max-w-lg">
            A seasoned technology leader with 7+ years of experience building digital products and leading development teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-teal hover:bg-teal/90 text-black font-medium">
              <a href="#projects">
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-teal text-teal hover:bg-teal/10">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
