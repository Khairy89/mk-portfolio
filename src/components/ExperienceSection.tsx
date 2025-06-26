
import { Fragment } from 'react';
import { Briefcase } from 'lucide-react';

type Service = {
  title: string;
  category: string;
  description: string[];
};

const services: Service[] = [{
  title: "Automation Workflow Engineering",
  category: "Process Automation",
  description: ["Engineered automation workflows with n8n for clients, integrating services like Google APIs, CRMs, and custom logic to reduce manual effort and boost efficiency", "Custom workflow design and implementation", "API integrations and data synchronization", "Process optimization and monitoring"]
}, {
  title: "AI-Driven Content Creation",
  category: "Creative Solutions",
  description: ["Delivered AI-driven content projects including logo generation, video creation, and image synthesis—enabling businesses to scale creative output rapidly", "Custom AI model implementation", "Brand identity and visual content generation", "Automated content production pipelines"]
}, {
  title: "Custom UI/UX Development",
  category: "Web Development",
  description: ["Designed and deployed custom UI/UX websites using modern design systems, ensuring responsive layouts and seamless user experiences", "Modern design system implementation", "Responsive web development", "User experience optimization"]
}, {
  title: "Low-Code Solutions Implementation",
  category: "Digital Solutions",
  description: ["Helped startups and SMEs implement cost-effective low-code solutions, significantly reducing time-to-market for digital services", "Rapid prototyping and development", "Cost-effective solution architecture", "Time-to-market optimization"]
}, {
  title: "Digital Transformation Consultation",
  category: "Strategic Consulting",
  description: ["Provided consultation on digital transformation strategies, aligning technical implementation with business goals", "Strategic planning and roadmap development", "Technology assessment and recommendations", "Business-technical alignment consulting"]
}];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-[#141414] py-0">
      <div className="section-padding">
        <h2 className="section-title text-center text-2xl sm:text-3xl md:text-4xl">My Service</h2>
        
        <div className="mt-16 max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase size={16} className="text-teal sm:w-5 sm:h-5" />
                <h3 className="text-lg sm:text-xl font-bold leading-tight">{service.title}</h3>
              </div>
              <p className="text-teal mb-4 font-medium text-sm sm:text-base">{service.category}</p>
              <ul className="space-y-2 text-light/80">
                {service.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
