
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CertificationSection from '@/components/CertificationSection';
import Footer from '@/components/Footer';

const Certification = () => {
  useEffect(() => {
    document.title = 'Certifications | Khairy Fauzi';
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
