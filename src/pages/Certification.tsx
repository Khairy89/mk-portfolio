
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CertificationSection from '@/components/CertificationSection';
import Footer from '@/components/Footer';

const Certification = () => {
  useEffect(() => {
    document.title = 'Professional Certifications | Khairy Fauzi - Software Engineer';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View Khairy Fauzi\'s professional certifications in software engineering, Salesforce development, automation tools, and UI/UX design. Showcasing expertise and continuous learning in technology.');
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Professional Certifications | Khairy Fauzi - Software Engineer');
    }
    if (ogDescription) {
      ogDescription.setAttribute('content', 'View Khairy Fauzi\'s professional certifications in software engineering, Salesforce development, automation tools, and UI/UX design.');
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <CertificationSection />
      </main>
      <Footer />
    </>
  );
};

export default Certification;
