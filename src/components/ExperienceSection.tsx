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
        <h2 className="section-title text-center">My Service</h2>
        
        <div className="mt-16 relative max-w-6xl mx-auto">
          {/* Timeline Line - Hidden on mobile for cleaner look */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-muted transform -translate-x-1/2"></div>
          
          {/* Service Items */}
          {services.map((service, index) => <Fragment key={index}>
              <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 md:mb-12 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Node - Hidden on mobile */}
                
                
                {/* Content */}
                <div className={`w-full md:w-5/12 bg-card p-4 md:p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <Briefcase size={18} className="text-teal" />
                    <h3 className="text-lg md:text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-teal mb-3 md:mb-4 font-medium text-sm md:text-base">{service.category}</p>
                  <ul className={`space-y-2 text-light/80 text-sm md:text-base ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {service.description.map((item, i) => <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0 text-base text-left"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>)}
                  </ul>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            </Fragment>)}
        </div>
      </div>
    </section>;
};
export default ExperienceSection;