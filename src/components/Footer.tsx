
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark py-8 sm:py-12 border-t border-muted">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6 md:mb-0">
          <div className="text-center md:text-left">
            <span className="text-xl sm:text-2xl font-montserrat font-bold text-teal">
              Khairy<span className="text-light">.Fauzi</span>
            </span>
            <p className="text-light/70 mt-2 text-sm sm:text-base">Software Engineer</p>
          </div>
          
          <div>
            <button 
              onClick={scrollToTop} 
              className="flex items-center gap-2 text-light hover:text-teal transition-colors text-sm sm:text-base"
            >
              Back to Top
              <ArrowUp size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-muted/50 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light/60 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Khairy Fauzi. All rights reserved.
          </p>
          
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-light/60 hover:text-teal text-xs sm:text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-light/60 hover:text-teal text-xs sm:text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
