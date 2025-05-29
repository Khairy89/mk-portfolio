
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
  return <section id="experience" className="bg-[#141414] py-0">
      <div className="section-padding">
        <h2 className="section-title">My Service</h2>
        
        <div className="mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-muted md:transform md:-translate-x-1/2"></div>
          
          {/* Service Items */}
          {services.map((service, index) => <Fragment key={index}>
              <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 mb-16 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-teal transform -translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`w-full bg-card p-8 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={18} className="text-teal" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-teal mb-4">{service.category}</p>
                  <ul className={`space-y-2 text-light/80 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {service.description.map((item, i) => <li key={i} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal mt-1.5"></span>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </Fragment>)}
        </div>
      </div>
    </section>;
};

export default ExperienceSection;
