import { ArrowUp } from 'lucide-react';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-dark py-12 border-t border-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-montserrat font-bold text-teal">
              Khairy<span className="text-light">.Fauzi</span>
            </span>
            <p className="text-light/70 mt-2">Software Engineer</p>
          </div>
          
          <div>
            <button onClick={scrollToTop} className="flex items-center gap-2 text-light hover:text-teal transition-colors">
              Back to Top
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-muted/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Khairy Fauzi. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-light/60 hover:text-teal text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-light/60 hover:text-teal text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;