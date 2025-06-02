
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { name: 'Home', url: '#hero', isSection: true },
    { name: 'Experience', url: '#experience', isSection: true },
    { name: 'Projects', url: '#projects', isSection: true },
    { name: 'Tools', url: '#tools', isSection: true },
    { name: 'Certification', url: '/certification', isSection: false },
    { name: 'About', url: '#about', isSection: true },
    { name: 'Contact', url: '#contact', isSection: true }
  ];

  const handleNavigation = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    
    if (link.isSection) {
      // If we're not on home page and it's a section link, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll to section
        setTimeout(() => {
          const element = document.querySelector(link.url);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // We're already on home page, just scroll to section
        const element = document.querySelector(link.url);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // It's a page link, navigate normally
      navigate(link.url);
    }
  };
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <button 
          onClick={() => navigate('/')}
          className="text-2xl font-montserrat font-bold text-teal hover:text-teal/80 transition-colors"
        >
          Khairy<span className="text-light">.Fauzi</span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => handleNavigation(link)}
              className="text-light text-sm hover:text-teal transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-light hover:text-teal hover:bg-dark/50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-dark/95 backdrop-blur-md z-40 flex flex-col">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => handleNavigation(link)}
                className="text-light text-xl hover:text-teal transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
