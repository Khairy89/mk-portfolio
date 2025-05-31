
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink, Award } from 'lucide-react';

const certifications = [
  {
    title: "Certified Artificial Intelligence Practitioner",
    issuer: "CertNexus",
    date: "March 20, 2025",
    validUntil: "March 20, 2028",
    id: "2022003911",
    image: "/lovable-uploads/ef309c66-9ac1-480d-9234-0de5647af6ec.png",
    description: "Professional certification in AI implementation and best practices"
  },
  {
    title: "Certified Data Science Practitioner", 
    issuer: "CertNexus",
    date: "March 26, 2025",
    validUntil: "March 26, 2028",
    id: "2022003911",
    image: "/lovable-uploads/c2a62bdc-d400-4de3-b652-7b70357792ee.png",
    description: "Expert-level certification in data science methodologies and tools"
  },
  {
    title: "Platform App Builder",
    issuer: "Salesforce",
    date: "December 13, 2022",
    validUntil: "Ongoing",
    id: "2783851",
    image: "/lovable-uploads/dab79146-22c6-40e7-a761-bd9928ce8cd8.png",
    description: "Certified expertise in building custom applications on the Salesforce platform"
  }
];

const CertificationSection = () => {
  return (
    <section className="bg-dark min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-teal">Certifications</span>
          </h1>
          <p className="text-xl text-light/80 max-w-2xl mx-auto">
            Validated expertise across artificial intelligence, data science, and platform development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-teal/10 to-blue/10 flex items-center justify-center p-4">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="max-w-full max-h-full object-contain rounded"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="text-teal" size={20} />
                  <Badge variant="secondary" className="text-teal bg-teal/10">
                    {cert.issuer}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-light">
                  {cert.title}
                </h3>
                
                <p className="text-light/70 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-light/60">
                    <Calendar size={16} />
                    <span>Issued: {cert.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-light/60">
                    <ExternalLink size={16} />
                    <span>Valid until: {cert.validUntil}</span>
                  </div>
                  
                  <div className="text-sm text-light/60">
                    <span className="font-medium">ID:</span> {cert.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
